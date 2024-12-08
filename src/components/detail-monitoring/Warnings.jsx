import Warning from "./Warning";

export default function Warnings({ isWarningOpen }) {
    return (
        <div className="px-5 hidden md:block">
            <p className="mb-3 text-xl font-extrabold text-orange-pdu-500">Warning</p>
            {[...Array(3)].map((_, index) => (
                <Warning
                    key={index}
                    name={"Over Pressure"}
                    time={"2024-03-19 15:27:16"}
                />
            ))}
        </div>
    )
}