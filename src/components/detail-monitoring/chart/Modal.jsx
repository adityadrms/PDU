import { useState } from "react";

const options = [
  { label: "Bitdepth", value: "bitdepth" },
  { label: "Scfm", value: "scfm" },
  { label: "Mudcondin", value: "mudcondin" },
  { label: "Blockpos", value: "blockpos" },
  { label: "Woba", value: "woba" },
  { label: "Ropi", value: "ropi" },
  { label: "Deptbitv", value: "deptbitv" },
  { label: "Mudcondout", value: "mudcondout" },
  { label: "Torqa", value: "torqa" },
  { label: "Rpm", value: "rpm" },
  { label: "Hklda", value: "hklda" },
  { label: "Logdepth", value: "logdepth" },
  { label: "H2s1", value: "h2s1" },
  { label: "Mudflowoutp", value: "mudflowoutp" },
  { label: "Totspm", value: "totspm" },
  { label: "Stppress", value: "stppress" },
  { label: "Mudflowin", value: "mudflowin" },
  { label: "Co21", value: "co21" },
  { label: "Gas", value: "gas" },
  { label: "Mudtempin", value: "mudtempin" },
  { label: "Mudtempout", value: "mudtempout" },
  { label: "Tankvoltot", value: "tankvoltot" },
];

export default function Modal({ open, onClose, index, filter, setFilter }) {
  const [tempFilter, setTempFilter] = useState({ ...filter[index] });

  const handleSelectChange = (e) => {
    setTempFilter({
      ...tempFilter,
      value: e.target.value,
      label: e.target.value,
    });
  };

  const handleBoundChange = (e) => {
    const { name, value } = e.target;
    if (/^-?\d*$/.test(value)) {
      // Hanya izinkan angka dan tanda "-"
      setTempFilter({
        ...tempFilter,
        [name]: value === "" ? "" : Number(value),
      });
    }
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setTempFilter({
      ...tempFilter,
      color,
    });
  };

  const handleHexInputChange = (e) => {
    const color = e.target.value;
    if (/^#[0-9A-Fa-f]{0,6}$/.test(color)) {
      // allow partial hex input
      setTempFilter({
        ...tempFilter,
        color,
      });
    }
  };

  const handleSave = () => {
    const updatedFilter = [...filter];
    updatedFilter[index] = tempFilter;
    setFilter(updatedFilter);
    onClose();
  };

  return (
    <div
      className={`fixed text-black top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded-md relative w-96">
        <h2 className="text-lg font-semibold mb-4">
          Ubah Nilai untuk {filter[index]?.label}
        </h2>

        {/* Data Selection */}
        <select
          value={tempFilter.value || ""}
          onChange={handleSelectChange}
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
        >
          <option value="" disabled>
            Pilih data
          </option>
          <option value="-">-</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Lower Bound Input */}
        <div className="mb-4">
          <label className="block mb-1">Batas Bawah</label>
          <input
            type="number"
            name="lowerBound"
            value={tempFilter.lowerBound}
            onChange={handleBoundChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Upper Bound Input */}
        <div className="mb-4">
          <label className="block mb-1">Batas Atas</label>
          <input
            type="number"
            name="upperBound"
            value={tempFilter.upperBound}
            onChange={handleBoundChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Color Picker Input */}
        <div className="mb-4">
          <label className="block mb-1">Pilih Warna</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={tempFilter.color || "#000000"}
              onChange={handleColorChange}
              className="border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={tempFilter.color || "#000000"}
              onChange={handleHexInputChange}
              maxLength={7}
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="#000000"
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Simpan
          </button>
        </div>

        <button onClick={onClose} className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.364 5.636a2 2 0 00-2.828 0L12 9.172 8.464 5.636a2 2 0 00-2.828 2.828L9.172 12l-3.536 3.536a2 2 0 002.828 2.828L12 14.828l3.536 3.536a2 2 0 002.828-2.828L14.828 12l3.536-3.536a2 2 0 000-2.828z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
