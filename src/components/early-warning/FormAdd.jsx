'use client';

export default function FormAdd({ parameters, setParameters, isOpen, setIsOpen }) {
    const addParameters = () => {
        setParameters([...parameters, { parameter: '', condition: '', value: '' }]);
    };

    const deleteParameters = (i) => {
        const updatedParameters = parameters.filter((item, index) => index !== i);
        setParameters(updatedParameters);
    };
    return (
        <div id="popupNewRule" className={isOpen ? 'fixed h-screen w-full backdrop-blur flex justify-center items-center font-montserrat' : 'hidden'}>
            <div className="w-3/4 h-fit max-h-screen rounded-md grid grid-cols-1 border-2 p-14 overflow-y-scroll gap-5 shadow-md border-orange-pdu-500 bg-white">
                <div className="text-4xl font-bold">New Rule</div>
                {parameters.length === 1 ? (
                    <div className="flex items-end">
                        <div className="grid grid-cols-3 gap-5 w-full">
                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Parameter</label>
                                <select className="p-2 border border-[#B9B9B9]">
                                    <option value="">--select--</option>
                                    <option value="">--Select--</option>
                                    <option>--select--</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Condition</label>
                                <select className="p-2 border border-[#B9B9B9]">
                                    <option value="">--select--</option>
                                    <option value="">--Select--</option>
                                    <option value="">--select--</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Value</label>
                                <select className="p-2 border border-[#B9B9B9]">
                                    <option value="">--select--</option>
                                    <option value="">--Select--</option>
                                    <option value="">--select--</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ) : (
                    parameters.map((item, index) => (
                        <div key={index}>
                            <div className="flex items-end">
                                <div className="grid grid-cols-3 gap-5 w-full">
                                    <div className="flex flex-col">
                                        <label className="font-semibold mb-1">Parameter</label>
                                        <select className="p-2 border border-[#B9B9B9]">
                                            <option value="">--select--</option>
                                            <option value="">--Select--</option>
                                            <option>--select--</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-semibold mb-1">Condition</label>
                                        <select className="p-2 border border-[#B9B9B9]">
                                            <option value="">--select--</option>
                                            <option value="">--Select--</option>
                                            <option value="">--select--</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-semibold mb-1">Value</label>
                                        <select className="p-2 border border-[#B9B9B9]">
                                            <option value="">--select--</option>
                                            <option value="">--Select--</option>
                                            <option value="">--select--</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="ml-2" onClick={() => deleteParameters(index)}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 31.5C9.675 31.5 8.969 31.2065 8.382 30.6195C7.795 30.0325 7.501 29.326 7.5 28.5V9H6V6H13.5V4.5H22.5V6H30V9H28.5V28.5C28.5 29.325 28.2065 30.0315 27.6195 30.6195C27.0325 31.2075 26.326 31.501 25.5 31.5H10.5ZM25.5 9H10.5V28.5H25.5V9ZM13.5 25.5H16.5V12H13.5V25.5ZM19.5 25.5H22.5V12H19.5V25.5Z" fill="#E75C33" />
                                    </svg>
                                </button>
                            </div>
                            {index + 1 != parameters.length ? (
                                <div className="mt-5 flex">
                                    <div className="mr-2">
                                        <input type="radio" value="and" name="operator" className="mr-1" />
                                        <label>And</label>
                                    </div>
                                    <div className="mr-2">
                                        <input type="radio" value="or" name="operator" className="mr-1" />
                                        <label>Or</label>
                                    </div>
                                </div>
                            ) : ""}
                        </div>
                    ))
                )}
                <div className=" text-[#E75C33] font-semibold" onClick={() => addParameters()}>+ Add New Rule</div>
                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Value</label>
                    <input className="p-2 border border-[#B9B9B9]"></input>
                </div>
                <div className="flex justify-end gap-5">
                    <button className="p-2 font-semibold border border-white rounded-md h-fit hover:border-[#E75C33]" onClick={() => setIsOpen(!isOpen)}>Cancel</button>
                    <button className="p-2 bg-[#E75C33] flex gap-2 items-center h-fit text-white rounded-md">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7825 6.96751L17.0325 3.21751C16.9624 3.148 16.8793 3.09301 16.7879 3.05568C16.6966 3.01836 16.5987 2.99944 16.5 3.00001H4.5C4.10218 3.00001 3.72064 3.15805 3.43934 3.43935C3.15804 3.72066 3 4.10219 3 4.50001V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V7.50001C21.0006 7.40131 20.9817 7.30346 20.9443 7.21208C20.907 7.1207 20.852 7.03759 20.7825 6.96751ZM9 4.50001H15V7.50001H9V4.50001ZM15 19.5H9V13.5H15V19.5ZM16.5 19.5V13.5C16.5 13.1022 16.342 12.7207 16.0607 12.4394C15.7794 12.158 15.3978 12 15 12H9C8.60218 12 8.22064 12.158 7.93934 12.4394C7.65804 12.7207 7.5 13.1022 7.5 13.5V19.5H4.5V4.50001H7.5V7.50001C7.5 7.89784 7.65804 8.27937 7.93934 8.56067C8.22064 8.84198 8.60218 9.00001 9 9.00001H15C15.3978 9.00001 15.7794 8.84198 16.0607 8.56067C16.342 8.27937 16.5 7.89784 16.5 7.50001V4.80751L19.5 7.80751V19.5H16.5Z" fill="white" />
                        </svg>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}