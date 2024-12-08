"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
export default function DetailProfile({ idProfile }) {
    const [isShowPass, setIsShowPass] = useState(false)
    return (
        <div className="w-full h-full">
            <div className="hidden md:flex flex-col items-center h-full bg-putih-susu-500 bg-[url('/assets/dashboard/tower.svg')] bg-no-repeat bg-contain bg-right-bottom">
                <div className="mb-2 pt-24 w-[80%]">
                    <div className="mb-3">
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
                            <div className="text-2xl md:text-3xl font-bold text-orange-pdu-500">Setting</div>
                        </div>
                    </div>
                    <div className="pl-6 space-y-3">
                        <div>
                            <p className="font-semibold">Company Name</p>
                            <p className="text-[#818181]">Client PDU 1</p>
                        </div>
                        <div>
                            <p className="font-semibold">Email</p>
                            <p className="text-[#818181]">client1@pdu.com</p>
                        </div>
                        <div>
                            <p className="font-semibold">Password</p>
                            <div className="flex">
                                <input type={isShowPass ? "text" : "password"} name="" className="text-[#818181] bg-transparent" defaultValue={"hahaha"} disabled />
                                {isShowPass ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" onClick={() => setIsShowPass(!isShowPass)}>
                                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" onClick={() => setIsShowPass(!isShowPass)}>
                                        <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <div>
                            <Link href="/dashboard/profile/edit-password" className="flex w-fit mt-3 items-center hover:-translate-y-1 transition-transform hover:underline ease-in relative text-[#818181]">
                                Change Password
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden h-full bg-white">
                <div className=" h-[25%] bg-cover bg-[url(/assets/profile/bg-profile.png)] justify-center bg-center relative">
                    <div className="absolute -bottom-10 flex w-full justify-center">
                        <Image
                            src={"/assets/profile/profile-icon.svg"}
                            width={100}
                            height={100}
                            alt="profile-picture"
                        />
                    </div>
                </div>
                <div className="bg-white h-3/4 pt-[12%] flex flex-col items-center">
                    <div className=" text-center">
                        <p className="text-xl font-semibold">Client PDU</p>
                        <p className="text-lg">client1@pdu.com</p>
                    </div>
                    <div className="bg-[#F6F6F6] shadow-lg w-[85%] p-3 rounded-lg mt-5 space-y-3">
                        <div className="flex items-center">
                            <p className="font-bold p-1 mr-3 bg-white rounded-md shadow-sm w-8 h-8 flex items-center text-xl justify-center">@</p>
                            <div>
                                <p className="text-xs font-semibold">Username</p>
                                <input type="text" name="" defaultValue={"clientPDU1"} className="text-[#969696]" disabled />
                            </div>
                        </div>
                        <hr className="bg-[#EAEAEA] h-0.5" />
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="p-1 mr-3 bg-white rounded-md shadow-sm w-8 h-8 flex items-center text-xl justify-center">
                                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-xs font-semibold">Password</p>
                                    <input type={isShowPass ? "text" : "password"} name="" className="text-[#969696]" defaultValue={"hahaha"} disabled />
                                </div>
                            </div>
                            {isShowPass ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" onClick={() => setIsShowPass(!isShowPass)}>
                                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" onClick={() => setIsShowPass(!isShowPass)}>
                                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                </svg>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center mt-5 items-center text-sm text-[#969696]">
                        <Link href="/dashboard/profile/edit-password" className="flex">
                            Change Password
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                    <div className="bg-[#F6F6F6] shadow-lg w-[85%] text-[#C40202] p-3 rounded-lg mt-5 flex items-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="p-1 mr-3 bg-[#F8B8B8] rounded-md shadow-sm w-8 h-8 flex items-center text-xl justify-center" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 10.5C2.225 10.5 1.98967 10.4022 1.794 10.2065C1.59833 10.0108 1.50033 9.77533 1.5 9.5V2.5C1.5 2.225 1.598 1.98967 1.794 1.794C1.99 1.59833 2.22533 1.50033 2.5 1.5H6V2.5H2.5V9.5H6V10.5H2.5ZM8 8.5L7.3125 7.775L8.5875 6.5H4.5V5.5H8.5875L7.3125 4.225L8 3.5L10.5 6L8 8.5Z" fill="#C40202" />
                        </svg>
                        <p className="font-semibold">Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )

}