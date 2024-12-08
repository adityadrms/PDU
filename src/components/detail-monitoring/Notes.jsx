import Note from "./Note";
export default function Notes({}) {
  const lengthTemporary = 2;
  return (
    <div className="p-5">
      <div className="mb-3 text-lg 2xl:text-xl font-extrabold text-orange-pdu-500">
        Notes
      </div>
      <div className="rounded-lg shadow-lg border-2 border-[#F2F2F2] overflow-hidden">
        {[...Array(lengthTemporary)].map((_, index) => (
          <Note
            key={index}
            name={"PUMP BACK SIDE F/ COOLING TOWER 380 GPM"}
            note={"390.38 m"}
            warning={true}
            time={"2024-03-19 15:27:16"}
          />
        ))}
        {[...Array(lengthTemporary)].map((_, index) => (
          <Note
            key={index}
            name={"PUMP BACK SIDE F/ COOLING TOWER 380 GPM"}
            note={"390.38 m"}
            warning={false}
            time={"2024-03-19 15:27:16"}
          />
        ))}
      </div>
    </div>
  );
}
