"use client";
import { useState } from "react";
import Modal from "./Modal";

export default function ControlBar({ filter, setFilter }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexModal, setIndexModal] = useState(0);

  const openModal = (index) => {
    setIsModalOpen(true);
    setIndexModal(index);
  };

  return (
    <div className="flex flex-col w-full border-t-2 border-x-2 border-gray-200 rounded-md justify-center items-center text-sm">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="flex flex-row justify-between items-center border-b-2 border-gray-200 w-full px-5"
        >
          <div className={`flex flex-row items-center gap-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
            >
              <path
                d="M5 0.5C5.97968 0.499943 6.93779 0.78769 7.75533 1.3275C8.57287 1.86731 9.21382 2.6354 9.59856 3.53636C9.98331 4.43733 10.0949 5.43147 9.91948 6.39531C9.74405 7.35915 9.28935 8.25023 8.61183 8.95786C7.93431 9.66549 7.06384 10.1585 6.10853 10.3756C5.15322 10.5928 4.15517 10.5245 3.23834 10.1793C2.3215 9.83403 1.52629 9.22707 0.951458 8.43376C0.37663 7.64045 0.0475181 6.69575 0.00500011 5.717L0 5.5L0.00500011 5.283C0.0609194 3.99575 0.611607 2.77978 1.54222 1.88866C2.47284 0.997541 3.71154 0.500074 5 0.5Z"
                fill={filter[i]?.color}
              />
            </svg>
            <div className="flex flex-col justify-start items-start font-semibold">
              <p style={{ color: filter[i]?.color }}>
                {filter[i]?.label || ""}
              </p>
              <div className="flex flex-row gap-1 text-gray-400">
                <p className={`${"text-[" + filter[i]?.color + "]"}`}>
                  {filter[i]?.lowerBound}
                </p>
                <p>/</p>
                <p>{filter[i]?.upperBound}</p>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            className="cursor-pointer"
            onClick={() => openModal(i)}
          >
            <path
              d="M8.2502 20.5L7.8502 17.3C7.63353 17.2167 7.42953 17.1167 7.2382 17C7.04686 16.8833 6.8592 16.7583 6.6752 16.625L3.7002 17.875L0.950195 13.125L3.5252 11.175C3.50853 11.0583 3.5002 10.946 3.5002 10.838V10.163C3.5002 10.0543 3.50853 9.94167 3.5252 9.825L0.950195 7.875L3.7002 3.125L6.6752 4.375C6.85853 4.24167 7.0502 4.11667 7.2502 4C7.4502 3.88333 7.6502 3.78333 7.8502 3.7L8.2502 0.5H13.7502L14.1502 3.7C14.3669 3.78333 14.5712 3.88333 14.7632 4C14.9552 4.11667 15.1425 4.24167 15.3252 4.375L18.3002 3.125L21.0502 7.875L18.4752 9.825C18.4919 9.94167 18.5002 10.0543 18.5002 10.163V10.837C18.5002 10.9457 18.4835 11.0583 18.4502 11.175L21.0252 13.125L18.2752 17.875L15.3252 16.625C15.1419 16.7583 14.9502 16.8833 14.7502 17C14.5502 17.1167 14.3502 17.2167 14.1502 17.3L13.7502 20.5H8.2502ZM11.0502 14C12.0169 14 12.8419 13.6583 13.5252 12.975C14.2085 12.2917 14.5502 11.4667 14.5502 10.5C14.5502 9.53333 14.2085 8.70833 13.5252 8.025C12.8419 7.34167 12.0169 7 11.0502 7C10.0669 7 9.23753 7.34167 8.5622 8.025C7.88686 8.70833 7.54953 9.53333 7.5502 10.5C7.55086 11.4667 7.88853 12.2917 8.5632 12.975C9.23786 13.6583 10.0669 14 11.0502 14Z"
              fill="#E75C33"
            />
          </svg>
        </div>
      ))}
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          index={indexModal}
          filter={filter}
          setFilter={setFilter}
        />
      )}
    </div>
  );
}
