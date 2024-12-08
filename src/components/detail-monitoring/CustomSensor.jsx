export default function CustomSensor({ isCustomSensor, setIsCustomSensor }) {
    return (
        <div className={isCustomSensor == true ? "absolute w-full h-full backdrop-blur-sm text-orange-pdu-500 flex z-10 justify-center items-center" : "hidden"}>
            <div className="bg-white p-10 shadow-md border-orange-pdu-500 border-2 rounded-xl space-y-3">
                <div className="text-xl font-bold mb-2">Custom</div>
                <div>
                    <div className="font-semibold">Parameter</div>
                    <input className="border-2 w-full p-1 border-[#CECECE]  rounded-md" type="text" />
                </div>
                <div>
                    <div className="font-semibold">Color</div>
                    <input className="border-2 w-full border-[#CECECE]  rounded-md" type="color" />
                </div>
                <div className="md:flex space-y-3 md:space-y-0 md:space-x-5">
                    <div>
                        <div className="font-semibold">Scale Start</div>
                        <input className="border-2 w-full p-1 border-[#CECECE] rounded-md" type="number" />
                    </div>
                    <div>
                        <div className="font-semibold">Scale End</div>
                        <input className="border-2 w-full p-1 border-[#CECECE] rounded-md" type="number" />
                    </div>
                </div>
                <div>
                    <div className="font-semibold">Unit</div>
                    <select name="" className=" border-2 w-full p-1 border-[#CECECE] rounded-md" id="">
                        <option value="">--Select--</option>
                    </select>
                </div>
                <div className="flex justify-end space-x-3">
                    <button className="p-1 mt-5 border-2 border-orange-pdu-500 rounded-md" onClick={() => setIsCustomSensor(!isCustomSensor)}>Cancel</button>
                    <button className="p-1 mt-5  bg-orange-pdu-500 text-white rounded-md">Save Changes</button>
                </div>
            </div>
        </div>
    )
}