"use client";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ activeLink, modalIsOpen, setModalIsOpen }) {
  const [currentTime, setCurrentTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleString();
      setCurrentTime(now);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [modalIsOpen]);

  return (
    <nav
      id="navbar"
      className={`w-full px-[6%] bg-[#E75C33] text-white shadow-md mb-3 items-center justify-between font-montserrat p-2 fixed top-0 z-[998] transition-transform duration-500`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <div className="font-bold text-xl">COMPANY</div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6">
            <Link
              className={`${activeLink === "Home" ? "underline" : ""
                } hover:-translate-y-1 transition-transform cursor-pointer`}
              href={"/dashboard"}
            >
              Home
            </Link>
            <Link
              className={` ${activeLink === "EWS" ? "underline" : ""
                } hover:-translate-y-1 transition-transform cursor-pointer`}
              href={"#"}
            >
              Early Warning
            </Link>
            <Link
              className={`${activeLink === "OCR" ? "underline" : ""
                } hover:-translate-y-1 transition-transform cursor-pointer`}
              href={"#"}
            >
              OCR
            </Link>
            <Link
              className={`${activeLink === "CMS" ? "underline" : ""
                } hover:-translate-y-1 transition-transform cursor-pointer`}
              href={"dashboard/content-management"}
            >
              CMS
            </Link>
          </div>
          <p className="font-montserrat text-sm md:text-base">{currentTime}</p>
        </div>

        {/* Hamburger Toggle */}
        <div className="lg:hidden">
          <Hamburger
            easing="ease-in"
            toggled={isMobileMenuOpen}
            toggle={setIsMobileMenuOpen}
            color={`#ffffff`}
            size={20}
            hideOutline={false}
          />
        </div>

        <Image
          src={"/assets/icon.png"}
          width={100}
          height={100}
          className="hidden lg:block h-14 w-auto rounded-full cursor-pointer hover:opacity-90"
          onClick={() => setModalIsOpen(!modalIsOpen)}
          alt="profile"
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col gap-6 mt-4 bg-[#E75C33] p-4">
          <div
            onClick={() => setModalIsOpen(!modalIsOpen)}
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
          <Link
            className={`${activeLink === "Home" ? "underline" : ""
              } hover:-translate-y-1 transition-transform cursor-pointer`}
            href={"/dashboard"}
          >
            Home
          </Link>
          <Link
            className={` ${activeLink === "EWS" ? "underline" : ""
              } hover:-translate-y-1 transition-transform cursor-pointer`}
            href={"#"}
          >
            Early Warning
          </Link>
          <Link
            className={`${activeLink === "OCR" ? "underline" : ""
              } hover:-translate-y-1 transition-transform cursor-pointer`}
            href={"#"}
          >
            OCR
          </Link>
          <Link
            className={`${activeLink === "CMS" ? "underline" : ""
              } hover:-translate-y-1 transition-transform cursor-pointer`}
            href={"/content-management"}
          >
            CMS
          </Link>
        </div>
      )}
    </nav>
  );
}
