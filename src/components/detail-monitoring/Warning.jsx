import Image from "next/image";

export default function Warning({ name, time }) {
  return (
    <div className="flex space-x-3 bg-[#FFEFC1] shadow-lg mb-3 p-4 items-center rounded-lg ">
      <Image
        src={"/assets/detail-realtime/warning-yellow.svg"}
        width={30}
        height={30}
        alt="warning"
      />
      <div>
        <p className="font-bold xl:text-base 2xl:text-lg text-dark-500">
          {name}
        </p>
        <p className="xl:text-xs 2xl:text-sm text-dark-500">{time}</p>
      </div>
    </div>
  );
}
