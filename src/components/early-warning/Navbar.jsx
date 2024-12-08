"use client";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar({ isModalOpen, setIsModalOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const date = new Date().toLocaleDateString();
      setCurrentTime(time);
      setCurrentDate(date);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[7%] lg:h-[10%] z-50 relative">
      <div className="flex justify-between items-center h-full bg-orange-pdu-500 w-full md:bg-[#FFD7CB]">
        <div className="items-center hidden md:flex h-full font-semibold text-sm space-x-5 lg:space-x-10">
          <div className="flex bg-orange-pdu-500 text-white h-full items-center px-7 rounded-r-2xl">
            <Image
              src={"/assets/early-warning/arrowleft.svg"}
              width={20}
              height={20}
              className="mr-3"
              alt="icon-back"
            />
            <p className="text-2xl">Back</p>
          </div>
          <div>
            <p>Company Name</p>
            <p className="text-orange-pdu-500">MCG</p>
          </div>
          <div>
            <p>Well Name</p>
            <p className="text-orange-pdu-500">IJN 9-1</p>
          </div>
          <div>
            <p>Rig Name</p>
            <p className="text-orange-pdu-500">EPI-9</p>
          </div>
          <div>
            <p>Rig Activity</p>
            <p className="text-orange-pdu-500">Tripping Out</p>
          </div>
          <div className="bg-[#E5B6A9] rounded-md p-1">
            <p>Current Time</p>
            <p className="text-orange-pdu-500"><span className="text-white">{currentDate} </span>{currentTime}</p>
          </div>
        </div>
        <div className="items-center mx-4 hidden md:flex" onClick={() => setIsModalOpen(!isModalOpen)}>
          <Image
            src={"/assets/detail-realtime/icon.png"}
            width={50}
            height={50}
            className="mr-3 h-1/2"
            alt={"icon-profile"}
          />
          <svg className="w-5 h-5 lg:w-3 lg:h-3" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9197 0.179993H6.68975H1.07975C0.119748 0.179993 -0.360251 1.33999 0.319749 2.01999L5.49975 7.19999C6.32975 8.02999 7.67975 8.02999 8.50975 7.19999L10.4797 5.22999L13.6897 2.01999C14.3597 1.33999 13.8797 0.179993 12.9197 0.179993Z" fill="#E75C33" />
          </svg>
        </div>
        <div className="md:hidden mx-4 flex justify-between w-full">
          <div className="flex space-x-3 text-white">
            <div>
              <p>Well Name</p>
              <p className="font-semibold">IJN 9-1</p>
            </div>
            <div>
              <p>Rig Name</p>
              <p className="font-semibold">EPI-9</p>
            </div>
          </div>
          <Hamburger
            easing="ease-in"
            toggled={isMobileMenuOpen}
            toggle={setIsMobileMenuOpen}
            color={`#ffffff`}
            size={20}
            hideOutline={false}
          />
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex w-full absolute z-20 flex-col gap-6 text-white bg-[#E75C33] p-4">
          <Link href={"/dashboard/profile"}>
            <div
              className="w-full flex flex-row justify-between items-center border-b pb-2 hover:-translate-y-1 transition-transform cursor-pointer "
            >
              <p>Profile</p>
              <Image
                src={"/assets/icon.png"}
                width={100}
                height={100}
                className="lg:hidden h-10 w-auto rounded-full"
              />
            </div>
          </Link>
          <Link
            href={"/dashboard"}
          >
            Dashboard
          </Link>
          <Link
            href={"#"}
          >
            Early Warning
          </Link>
        </div>
      )}
    </div>
  );
}
