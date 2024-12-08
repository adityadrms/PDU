export default function Table({ setIsOpen, isOpen }) {
    return (
        <div className="w-full lg:mx-32 lg:pt-20 flex justify-center">
            <div className="w-4/5 min-w-fit overflow-scroll xl:overflow-hidden">
                <p className=" text-4xl font-bold m2-3">Rules</p>
                <p className=" text-[#E75C33] font-semibold cursor-pointer mb-3" onClick={() => setIsOpen(!isOpen)}>+ Add New Rule</p>
                <div className="rounded-md border-2 border-[#B9B9B9]">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th className="p-3 border-r-2 border-[#B9B9B9]">Warning</th>
                                <th className="p-3 border-r-2 border-[#B9B9B9]">Data</th>
                                <th className="p-3 border-[#B9B9B9]">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">Over Pressure</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]"></td>
                                <td className="p-3 border-t-2 border-[#B9B9B9]">2024-09-01 17:08:45</td>
                            </tr>
                            <tr>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">Over Pressure</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]"></td>
                                <td className="p-3 border-t-2 border-[#B9B9B9]">2024-09-01 17:08:45</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}