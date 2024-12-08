"use client";
import ComputerVision from "@/components/detail-monitoring/ComputerVision";
import CustomSensor from "@/components/detail-monitoring/CustomSensor";
import Notes from "@/components/detail-monitoring/Notes";
import Sensors from "@/components/detail-monitoring/Sensors";
import Warnings from "@/components/detail-monitoring/Warnings";
import Navbar from "@/components/early-warning/Navbar";
import { useEffect, useState } from "react";
import Charts from "@/components/detail-monitoring/chart/Charts";
import BitDepth from "@/components/detail-monitoring/BitDepth";
import WarningMobile from "@/components/detail-monitoring/WarningMobile";
import WarningAlarm from "@/components/detail-monitoring/WarningAlarm";
import Profile from "@/components/dashboard/Profile";
export default function Detail(params) {
  const [isCustomSensor, setIsCustomSensor] = useState(false);
  const [idSensor, setIdSensor] = useState("");
  const [isWarningOpen, setIsWarningOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    console.log();
  }, []);
  return (
    <div className="h-screen w-screen font-montserrat relative flex flex-col bg-white">
      <Navbar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <div className="hidden h-[90%] md:flex justify-between">
        <div className="w-full md:w-1/5 h-full overflow-y-scroll space-y-5 scrollbar-hidden p-7">
          <BitDepth />
          <Sensors setIdSensor={setIdSensor} setIsCustomSensor={setIsCustomSensor} />
        </div>
        <div className=" text-black w-[60vw] flex flex-col justify-center items-center relative overflow-x-clip">
          <Charts />
        </div>
        <div className="w-1/5 overflow-y-scroll scrollbar-hidden">
          <Notes />
          <ComputerVision />
          <Warnings />
        </div>
      </div>
      
      {/* Mobile */}
      <div className="md:hidden h-[90%] w-full space-y-5 overflow-scroll scrollbar-hidden relative">
        <BitDepth />
        <div className=" p-7">
          <Sensors setIdSensor={setIdSensor} setIsCustomSensor={setIsCustomSensor} />
        </div>
        <WarningMobile isWarningOpen={isWarningOpen} setIsWarningOpen={setIsWarningOpen} />
        <WarningAlarm isWarningOpen={isWarningOpen} setIsWarningOpen={setIsWarningOpen} />
      </div>
      <CustomSensor isCustomSensor={isCustomSensor} setIsCustomSensor={setIsCustomSensor} idSensor={idSensor} />
      <Profile modalIsOpen={isModalOpen} setModalIsOpen={setIsModalOpen} />
    </div>
  );
}
