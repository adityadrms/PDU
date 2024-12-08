"use client"
import FormManageCompany from "@/components/content-management/FormManageCompany";
import Navbar from "@/components/Navbar";
import { useState } from "react";
export default function AddData() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className="flex flex-col pt-[6%] bg-white font-montserrat h-screen w-full bg-[url('/assets/dashboard/tower.svg')] bg-no-repeat bg-contain bg-right-bottom">
            <Navbar
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                activeLink={"CMS"}
            />
            <FormManageCompany />
        </div>
    );
}