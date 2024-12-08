export default function Title() {
  return (
    <div className="mb-2 mt-12 md:mt-8 xl:mt-0 font-montserrat w-full flex justify-center">
      <div className="w-[80%]">
        <div className="flex items-center space-x-3">
          <svg
            viewBox="0 0 14 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[10px] h-[20px]"
          >
            <path
              d="M0 2.33047L0 13.4261L0 23.4176C0 25.1273 2.06597 25.9822 3.27705 24.7711L12.5027 15.5455C13.9809 14.0673 13.9809 11.6629 12.5027 10.1847L8.99407 6.67612L3.27705 0.959099C2.06597 -0.234175 0 0.620708 0 2.33047Z"
              fill="#E75C33"
            />
          </svg>
          <div className="text-2xl md:text-3xl font-bold text-orange-pdu-500">Dashboard</div>
        </div>
        <div className="ml-[22px] text-[#959595] font-semibold">Choose Well & Rig to monitor</div>
      </div>
    </div>
  );
}
