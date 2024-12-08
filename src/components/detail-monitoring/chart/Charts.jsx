"use client";
import ControlBar from "./ControlBar";
import LineChart from "./LineChart";
import React, { useState, useEffect, useCallback } from "react";

export default function Charts() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

  // Fetch sensor data every second
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3300/data");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        // Format date and time for chart usage
        const formattedData = result.map((d) => ({
          ...d,
          fullTime: `${d.date}T${d.time}`, // ISO 8601 format
        }));

        setData(formattedData);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch("/filter.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const filterData = await response.json();
        setFilters(filterData);
      } catch (err) {
        console.warn("Error fetching filters:", err.message);
      }
    };

    fetchFilters(); // Initial fetch
  }, []);

  // **Normalisasi Data**
  const normalizeData = (data, filters) => {
    return filters.map((filterGroup) => {
      const referenceFilter = filterGroup[0]; // Filter pertama dalam grup
      const referenceLower = referenceFilter.lowerBound;
      const referenceUpper = referenceFilter.upperBound;

      return filterGroup.map((filter) => {
        const normalizedValues = data.map((item) => {
          const rawValue = item[filter.value];
          if (rawValue === undefined || rawValue === null) return null;

          // Jika batas nol, gunakan skala default
          if (filter.lowerBound === 0 && filter.upperBound === 0) {
            return rawValue; // Tetap pakai nilai asli
          }

          // Normalisasi nilai ke skala filter referensi
          return (
            referenceLower +
            ((rawValue - filter.lowerBound) /
              (filter.upperBound - filter.lowerBound)) *
              (referenceUpper - referenceLower)
          );
        });

        // Tangani kasus untuk label "-"
        if (filter.label === "-") {
          return {
            ...filter,
            normalizedValues,
            color: "#cccccc", // Warna default untuk nilai kosong
          };
        }

        return {
          ...filter,
          normalizedValues,
        };
      });
    });
  };

  const normalizedFilters = normalizeData(data, filters);

  const calculateMaxY = (data) => {
    if (!data || data.length === 0) return new Date(); // Jika tidak ada data, gunakan waktu saat ini

    // Ambil waktu terakhir dari data
    const lastTime = new Date(data[data.length - 1].fullTime);

    // Tambahkan hingga mencapai pembulatan setengah jam berikutnya
    const minutes = lastTime.getMinutes();
    const additionalMinutes = minutes < 30 ? 30 - minutes : 60 - minutes;
    lastTime.setMinutes(lastTime.getMinutes() + additionalMinutes);
    lastTime.setSeconds(0, 0); // Atur detik dan milidetik ke nol

    return lastTime;
  };

  // Generate dataset dengan data asli (sebelum normalisasi)
  const generateDataset = (filterGroup) =>
    filterGroup?.map((filter) => ({
      label: filter.label,
      data: filter.normalizedValues,
      originalData: data.map((d) => d[filter.value]), // Data asli sebelum normalisasi
      borderColor: filter.color || "#000",
      backgroundColor: `${filter.color}80`,
      fill: false,
      pointStyle: false,
      pointRadius: 0,
      borderWidth: 1,
    }));

  // Generate options dengan tooltip menampilkan data asli
  const generateOptions = (filter) => {
    const maxY = calculateMaxY(data);

    return {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: false,
          min: filter?.lowerBound || 0,
          max: filter?.upperBound || 100,
          ticks: {
            stepSize: (filter?.upperBound - filter?.lowerBound || 100) / 5,
          },
          grid: {
            color: "#80808080",
          },
        },
        y: {
          type: "time",
          reverse: true,
          time: {
            unit: "minute",
          },
          max: maxY, // Waktu akhir dibulatkan
          grid: {
            color: "#ddd",
          },
          ticks: {
            source: "auto",
            stepSize: 30,
            display: filter?.hiddenLabel,
            callback: (value) => {
              const date = new Date(value);
              const hours = String(date.getHours()).padStart(2, "0");
              const minutes = String(date.getMinutes()).padStart(2, "0");
              const seconds = String(date.getSeconds()).padStart(2, "0");
              return `${hours}:${minutes}`;
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          intersect: false,
          mode: "index",
          axis: "y",
          yAlign: "bottom",
          callbacks: {
            label: (tooltipItem) => {
              const dataset = tooltipItem.dataset;
              const dataIndex = tooltipItem.dataIndex;
              const originalValue = dataset.originalData[dataIndex];
              return `${dataset.label}: ${
                originalValue !== null ? originalValue : "N/A"
              }`;
            },
          },
        },
        zoom: {
          zoom: {
            drag: {
              enabled: true,
            },
            mode: "y",
            onZoomComplete: ({ chart }) => {
              const chartYScale = chart.scales.y;
              const minTime = chartYScale.min;
              const maxTime = chartYScale.max;
              console.log("Selected Time Range:", {
                start: minTime,
                end: maxTime,
              });
            },
          },
        },
      },
    };
  };

  const handleFilterChange = useCallback((index, updatedFilter) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter, i) => (i === index ? updatedFilter : filter))
    );
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center p-4 gap-2">
      {normalizedFilters?.length > 0 && data?.length > 0 ? (
        <>
          {/* Bagian ControlBar */}
          <div className="flex flex-row w-full justify-center items-center gap-2">
            {normalizedFilters.map((filterGroup, index) => (
              <div key={`control-bar-${index}`} className="w-full">
                <ControlBar
                  filter={filterGroup}
                  index={index}
                  setFilter={(updatedFilter) =>
                    handleFilterChange(index, updatedFilter)
                  }
                />
              </div>
            ))}
          </div>

          {/* Bagian LineChart */}
          <div className="flex flex-row w-full h-full">
            {normalizedFilters.map((filterGroup, index) => (
              <div key={`line-chart-${index}`} className={`w-1/4 h-full`}>
                <LineChart
                  data={{
                    labels: data.map((d) => d.fullTime),
                    datasets: generateDataset(filterGroup),
                  }}
                  options={generateOptions(filterGroup[0])}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full text-gray-500">
          Loading data...
        </div>
      )}
    </div>
  );
}
