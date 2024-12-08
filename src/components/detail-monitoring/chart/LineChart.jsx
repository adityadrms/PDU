"use client";

import dynamic from "next/dynamic";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

const zoomPlugin = dynamic(() => import("chartjs-plugin-zoom"), { ssr: false });

const customGridLinePlugin = {
  id: "horizontalGridLineOnHover",
  afterDraw(chart) {
    const tooltip = chart.tooltip;

    if (tooltip && tooltip.getActiveElements().length) {
      const { ctx } = chart;
      const activePoint = tooltip.getActiveElements()[0];
      const y = activePoint.element.y;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(chart.chartArea.left, y); // Garis dimulai dari kiri grid
      ctx.lineTo(chart.chartArea.right, y); // Garis berakhir di kanan grid
      ctx.lineWidth = 1; // Ketebalan garis
      ctx.strokeStyle = "#000000"; // Warna garis
      ctx.stroke();
      ctx.restore();
    }
  },
};

if (typeof window !== "undefined") {
  // Pastikan ChartJS hanya didaftarkan di client-side
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    customGridLinePlugin
  );

  import("chartjs-plugin-zoom").then((module) => {
    ChartJS.register(module.default || module);
  });
}

const LineChart = ({ data, options }) => {
  return (
    <div className="flex h-full">
      <Line data={data} options={options} />
    </div>
  );
};

LineChart.displayName = "LineChart";

export default LineChart;
