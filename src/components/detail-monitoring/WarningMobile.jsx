import Warning from "./Warning"
export default function WarningMobile({ isWarningOpen, setIsWarningOpen }) {
    return (
        <div className={`w-full h-full z-30 backdrop-blur-sm items-center justify-center top-10 flex ${isWarningOpen ? "fixed" : "hidden"}`}>
            <div className="bg-white p-5 shadow-md border-orange-pdu-500 max-h-96 overflow-y-scroll scrollbar-hidden border-2 rounded-xl space-y-3">
                <div className="flex justify-between mb-3">
                    <p className="text-xl font-extrabold text-orange-pdu-500">Warning</p>
                    <p className="cursor-pointer font-semibold" onClick={() => setIsWarningOpen(!isWarningOpen)}>x</p>
                </div>
                {[...Array(3)].map((_, index) => (
                    <Warning
                        key={index}
                        name={"Over Pressure"}
                        time={"2024-03-19 15:27:16"}
                    />
                ))}
            </div>
        </div>
    )
}