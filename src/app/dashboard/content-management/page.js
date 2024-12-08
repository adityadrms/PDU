"use client"
import ManageCompanyData from "@/components/content-management/ManageCompany";
import Navbar from "@/components/Navbar";
import Profile from "@/components/dashboard/Profile";
import { useState } from "react";

export default function ContentManagement() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div
            id="root"
            className="flex flex-col pt-[6%] h-screen bg-putih-susu-500 bg-[url('/assets/dashboard/tower.svg')] bg-no-repeat bg-contain bg-right-bottom"
        >
            <Navbar
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                activeLink={"CMS"}
            />
            <div className="flex flex-row relative h-full overflow-y-scroll mb-4">
                <ManageCompanyData />
            </div>
            <Profile modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </div>
    )
}