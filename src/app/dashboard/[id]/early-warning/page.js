'use client';
import FormAdd from "@/components/early-warning/FormAdd";
import Table from "@/components/early-warning/Table";
import Navbar from "@/components/early-warning/Navbar";
import { useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const [parameters, setParameters] = useState([{ parameter: '', condition: '', value: '' }]);
    return (
        <div className="flex relative items-center flex-col font-montserrat h-screen bg-white">
            <Navbar />
            <Table isOpen={isOpen} setIsOpen={setIsOpen} />
            <FormAdd parameters={parameters} setParameters={setParameters} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}
