import Image from "next/image"
export default function WarningAlarm({ isWarningOpen, setIsWarningOpen }) {
    return (
        <div className="bg-[#F9DAD1] fixed top-52 rounded-l-lg right-0 flex p-1 cursor-pointer" onClick={() => setIsWarningOpen(!isWarningOpen)}>
            <div className=" rounded-full w-1 h-1 bg-orange-pdu-500" />
            <Image
                src={"/assets/detail-realtime/warning.svg"}
                width={25}
                height={25}
                alt="warning-icon"
            />
        </div>
    )
}