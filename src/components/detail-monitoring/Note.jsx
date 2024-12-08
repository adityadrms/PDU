import Image from "next/image";
export default function Note({ warning, name, time, note }) {
  return (
    <div
      className={`p-2 xl:text-xs 2xl:text-sm flex items-center border-b-2 border-[#F2F2F2] ${
        warning ? "bg-orange-pdu-500" : "bg-white"
      }`}
    >
      {warning ? (
        <Image
          src={"/assets/detail-realtime/warning-white.svg"}
          width={20}
          height={20}
          className="mx-2"
          alt="warning"
        />
      ) : (
        <Image
          src={"/assets/detail-realtime/circle.svg"}
          width={20}
          height={20}
          className="mx-2"
          alt=""
        />
      )}
      <div>
        <p className={warning ? "text-white" : "text-black"}>{name}</p>
        <p className={warning ? "text-[#E0E0E0]" : "text-orange-pdu-500"}>
          {time}
        </p>
      </div>
    </div>
  );
}
