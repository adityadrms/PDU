"use client";
import Cards from "@/components/dashboard/Cards";
import Navbar from "@/components/Navbar";
import Title from "@/components/dashboard/Title";
import { useState } from "react";
import Profile from "@/components/dashboard/Profile";
export default function Dashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div
      id="root"
      className="flex flex-col pt-[6%] h-screen bg-putih-susu-500 bg-[url('/assets/dashboard/tower.svg')] bg-no-repeat bg-contain bg-right-bottom"
    >
      <Navbar
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        activeLink={"Home"}
      />
      <Title />
      <div className="flex flex-row relative h-full overflow-y-scroll mb-4">
        <Cards />
      </div>
      <Profile modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
}
