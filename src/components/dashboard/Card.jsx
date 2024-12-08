export default function Card({
  companyName,
  wellName,
  rigName,
  days,
  activity,
  lastReceive,
  bottom,
  rotating,
  pumping,
  insSlip,
  bitDepth,
  holeDepth,
  ROP,
}) {
  return (
    <div className="rounded-2xl bg-white h-fit shadow-md cursor-pointer hover:scale-105 transition-transform ease-in-out">
      <div className="text-center p-1 rounded-t-2xl bg-[#E75C33] text-white font-semibold">
        {companyName}
      </div>
      <div className="grid grid-cols-5 bg-[#F9DAD1] p-2 mt-2 text-sm gap-2 text-[#E75C33]">
        <div className="col-span-2 flex items-center font-medium">
          Well Name
        </div>
        <div className="col-span-3">
          <p className="bg-white font-semibold p-1 w-fit">{wellName}</p>
        </div>
        <div className="col-span-2 flex items-center font-medium">Rig Name</div>
        <div className="col-span-3">
          <p className="bg-white font-semibold p-1 w-fit">{rigName}</p>
        </div>
        <div className="col-span-2 flex items-center font-medium">Days</div>
        <div className="col-span-3">
          <p className="bg-white font-semibold p-1 w-fit">{days} Days</p>
        </div>
      </div>
      <div className="grid grid-cols-5 p-2 text-sm gap-2 text-[#E75C33]">
        <div className="col-span-2 flex items-center font-medium">Activity</div>
        <div className="col-span-3">
          <p className="bg-white font-semibold p-1 w-fit text-[#959595]">
            {activity}
          </p>
        </div>
        <div className="col-span-2 flex items-center font-medium">
          Last Receive
        </div>
        <div className="col-span-3">
          <p className="bg-white font-semibold p-1 w-fit text-[#959595]">
            {lastReceive}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm px-2 text-[#E75C33] py-1 bg-[#F9DAD1]">
        <p>Bottom</p>
        <p className="bg-[#E5FFD9] p-1 font-semibold rounded-md">Rotating</p>
        <p>Pumping</p>
        <p>Ins Slip</p>
      </div>
      <div className="grid grid-cols-5 p-2 text-sm gap-2 text-[#E75C33]">
        <div className="col-span-2 flex items-center font-medium">
          Bit Depth
        </div>
        <div className="col-span-3">
          <p className="bg-white font-semibold p-1 w-fit text-[#959595]">
            {bitDepth}
          </p>
        </div>
        <div className="col-span-2 flex items-center font-medium">
          Hole Depth
        </div>
        <div className="col-span-3">
          <p className="bg-white font-semibold p-1 w-fit text-[#959595]">
            {holeDepth}
          </p>
        </div>
        <div className="col-span-2 flex items-center font-medium">ROP</div>
        <div className="col-span-3">
          <p className="bg-white font-semibold p-1 w-fit text-[#959595]">
            {ROP}
          </p>
        </div>
      </div>
    </div>
  );
}
