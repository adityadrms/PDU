"use client";
import { useRouter } from "next/navigation"; // Jika menggunakan Next.js
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Cards() {
  const router = useRouter();

  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/dummyData.json");
      const data = await res.json();
      setDummyData(data);
    };
    fetchData();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/dashboard/${id}`); // Navigasi ke URL dengan id
  };

  return (
    <div className="w-full flex justify-center py-4 font-montserrat">
      <div className="w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {dummyData.map((data) => (
            <div
              key={data.id}
              onClick={() => handleCardClick(data.id)} // Tambahkan onClick
              className="cursor-pointer"
            >
              <Card
                companyName={data.companyName}
                wellName={data.wellName}
                rigName={data.rigName}
                days={data.days.toString()}
                activity={data.activity}
                lastReceive={data.lastReceive}
                bitDepth={data.bitDepth.toString()}
                holeDepth={data.holeDepth.toString()}
                ROP={data.ROP.toString()}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
