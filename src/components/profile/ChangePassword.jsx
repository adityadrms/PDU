"use client"
import { useState } from "react"
import Link from "next/link"
export default function ChangePassword() {
    const [showOldPass, setShowOldPass] = useState(false)
    const [showNewPass, setShowNewPass] = useState(false)
    const [showRetypePass, setShowRetypePass] = useState(false)
    return (
        <div className="w-full h-full">
            <div className="flex flex-col items-center h-full bg-putih-susu-500 bg-[url('/assets/dashboard/tower.svg')] bg-no-repeat bg-contain bg-right-bottom">
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
                            <div className="text-2xl md:text-3xl font-bold text-orange-pdu-500">Change Password</div>
                        </div>
                    </div>
                    <div className="pl-6">
                        <form action="" className="space-y-3">
                            <div>
                                <p className="font-semibold">Enter Old Password</p>
                                <div className="flex rounded-lg border-2 items-center bg-putih-susu-500 p-1.5 px-3 md:bg-transparent border-[#B9B9B9] md:w-1/2 lg:w-[30%]">
                                    <input type={showNewPass ? "text" : "password"} name="old_pass" className="text-[#818181] bg-transparent focus:outline-none w-full" defaultValue={"hahaha"} />
                                    {showNewPass ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" onClick={() => setShowNewPass(!showNewPass)}>
                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" onClick={() => setShowNewPass(!showNewPass)}>
                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">Enter New Password</p>
                                <div className="flex rounded-lg border-2 items-center bg-putih-susu-500 p-1.5 px-3 md:bg-transparent border-[#B9B9B9] md:w-1/2 lg:w-[30%]">
                                    <input type={showOldPass ? "text" : "password"} name="new_pass" className="text-[#818181] bg-transparent focus:outline-none w-full" defaultValue={"hahaha"} />
                                    {showOldPass ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" onClick={() => setShowOldPass(!showOldPass)}>
                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" onClick={() => setShowOldPass(!showOldPass)}>
                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">Re-type Password</p>
                                <div className="flex rounded-lg border-2 items-center bg-putih-susu-500 p-1.5 px-3 md:bg-transparent border-[#B9B9B9] md:w-1/2 lg:w-[30%]">
                                    <input type={showRetypePass ? "text" : "password"} name="" className="text-[#818181] w-full focus:outline-none bg-transparent " defaultValue={"hahaha"} />
                                    {showRetypePass ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" onClick={() => setShowRetypePass(!showRetypePass)}>
                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" onClick={() => setShowRetypePass(!showRetypePass)}>
                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className="mt-3 flex items-center space-x-3">
                                <Link href="/dashboard/profile" className="items-center hover:-translate-y-1 transition-transform hover:underline ease-in relative text-[#818181]">
                                    Cancel
                                </Link>
                                <Link href="" className="flex items-center hover:-translate-y-1 bg-orange-pdu-500 rounded-lg px-2 py-1 transition-transform ease-in relative text-white">
                                    Save
                                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" className="ml-1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.2644 8.29814L18.2019 4.23564C18.126 4.16033 18.0359 4.10076 17.9369 4.06032C17.8379 4.01989 17.7319 3.9994 17.625 4.00001H4.625C4.19402 4.00001 3.7807 4.17122 3.47595 4.47596C3.1712 4.78071 3 5.19404 3 5.62501V21.875C3 22.306 3.1712 22.7193 3.47595 23.0241C3.7807 23.3288 4.19402 23.5 4.625 23.5H20.875C21.306 23.5 21.7193 23.3288 22.024 23.0241C22.3288 22.7193 22.5 22.306 22.5 21.875V8.87501C22.5006 8.76808 22.4801 8.66208 22.4397 8.56309C22.3993 8.4641 22.3397 8.37406 22.2644 8.29814ZM9.5 5.62501H16V8.87501H9.5V5.62501ZM16 21.875H9.5V15.375H16V21.875ZM17.625 21.875V15.375C17.625 14.944 17.4538 14.5307 17.149 14.226C16.8443 13.9212 16.431 13.75 16 13.75H9.5C9.06902 13.75 8.6557 13.9212 8.35095 14.226C8.04621 14.5307 7.875 14.944 7.875 15.375V21.875H4.625V5.62501H7.875V8.87501C7.875 9.30599 8.04621 9.71932 8.35095 10.0241C8.6557 10.3288 9.06902 10.5 9.5 10.5H16C16.431 10.5 16.8443 10.3288 17.149 10.0241C17.4538 9.71932 17.625 9.30599 17.625 8.87501V5.95814L20.875 9.20814V21.875H17.625Z" fill="white" />
                                    </svg>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}