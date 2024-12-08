import Sensor from "./Sensor";
export default function Sensors({ setIdSensor, setIsCustomSensor }) {
  const lengthTemporary = 20;
  return (
    <div className="">
      <div className="text-xl font-extrabold text-orange-pdu-500">Sensor Status</div>
      <div className="p-3 rounded-lg shadow-lg border-2 border-[#F2F2F2]">
        {[...Array(lengthTemporary)].map((_, index) => (
          <Sensor
            key={index}
            name={"Bit Depth"}
            value={"390.38 m"}
            warning={true}
            setIdSaensor={setIdSensor}
            setIsCustomSensor={setIsCustomSensor}
          />
        ))}
      </div>
    </div>
  );
}
