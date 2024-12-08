import Image from "next/image"
export default function BitDepth() {
    return (
        <div className="w-full bg-[url(/assets/detail-realtime/bg-title.png)] md:bg-none relative bg-cover bg-center md:bg-transparent">
            <div className="md:p-0 p-7 flex justify-between items-center">
                <div className="flex items-center space-x-5 bg-[url(/assets/)]" >
                    <Image
                        src={"/assets/detail-realtime/tower-orange.svg"}
                        width={50}
                        height={50}
                        alt="tower-icon"
                    />
                    <div>
                        <p className=" text-xl md:text-2xl font-medium md:text-black text-white">Bit Depth</p>
                        <p className="text-xl font-bold text-orange-pdu-500">1801.99 m</p>
                    </div>
                </div>
                <div className="md:hidden bg-black rounded-lg p-3 items-center h-min flex flex-col justify-center">
                    <p className="text-white">Batuan (%)</p>
                    <p className="text-orange-pdu-500 font-semibold text-xl">100.00</p>
                </div>
            </div>
        </div>
    )
}