import Image from "next/image";

export default function Sensor({
  name,
  value,
  warning = false,
  setIsCustomSensor,
}) {
  return (
    <div className="flex justify-between border-b-2 border-[#F2F2F2] p-2 text-dark-500">
      <div className="flex gap-2 font-bold text-xs 2xl:text-sm">
        <Image
          src={"/assets/detail-realtime/setting.svg"}
          width={20}
          height={20}
          onClick={() => setIsCustomSensor(true)}
          className="cursor-pointer"
          alt="setting"
        />
        <p>{name}</p>
        <p className="text-orange-pdu-500">{value}</p>
      </div>
      {warning ? (
        <Image
          src={"/assets/detail-realtime/warning.svg"}
          width={20}
          height={20}
          className="relative right-0"
          alt="warning"
        />
      ) : (
        ""
      )}
    </div>
  );
}
