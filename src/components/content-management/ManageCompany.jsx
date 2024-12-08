import Image from "next/image"
import Link from "next/link"
export default function ManageCompanyData(params) {
    return (
        <div className="w-full h-full flex justify-center lg:pt-20">
            <div className="w-4/5 min-w-fit overflow-scroll xl:overflow-hidden">
                <p className=" text-4xl font-bold m2-3">Manage Company Data</p>
                <Link
                    className="hover:underline text-[#E75C33] font-semibold"
                    href={"/dashboard/content-management/add-data"}
                >
                    + Add New Company
                </Link>
                <div className="rounded-md border-2 border-[#B9B9B9] mt-5">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th className="p-3 border-r-2 border-[#B9B9B9]">No</th>
                                <th className="p-3 border-r-2 border-[#B9B9B9]">Company Name</th>
                                <th className="p-3 border-r-2 border-[#B9B9B9]">Username</th>
                                <th className="p-3 border-r-2 border-[#B9B9B9]">Password</th>
                                <th className="p-3 border-r-2 border-[#B9B9B9]">Email</th>
                                <th className="p-3 border-r-2 border-[#B9B9B9]">Role</th>
                                <th className="p-3 border-[#B9B9B9] text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">1</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">PT. Pertamina</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">muflih</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">1234</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">muflih@pdu.com</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">Admin</td>
                                <td className="p-3 border-t-2 flex space-x-5 justify-center border-[#B9B9B9]">
                                    <Image
                                        src={"/assets/content-management/edit-icon.svg"}
                                        width={20}
                                        height={20}
                                        alt={"edit-icon"}
                                    />
                                    <Image
                                        src={"/assets/content-management/trash-icon.svg"}
                                        width={20}
                                        height={20}
                                        alt={"trash-icon"}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">2</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">PT. Pertamina</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">muflih</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">1234</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">muflih@pdu.com</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">Admin</td>
                                <td className="p-3 border-t-2 flex space-x-5 justify-center border-[#B9B9B9]">
                                    <Image
                                        src={"/assets/content-management/edit-icon.svg"}
                                        width={20}
                                        height={20}
                                        alt={"edit-icon"}
                                    />
                                    <Image
                                        src={"/assets/content-management/trash-icon.svg"}
                                        width={20}
                                        height={20}
                                        alt={"trash-icon"}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">3</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">PT. Pertamina</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">muflih</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">1234</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">muflih@pdu.com</td>
                                <td className="p-3 border-t-2 border-r-2 border-[#B9B9B9]">Admin</td>
                                <td className="p-3 border-t-2 flex space-x-5 justify-center border-[#B9B9B9]">
                                    <Image
                                        src={"/assets/content-management/edit-icon.svg"}
                                        width={20}
                                        height={20}
                                        alt={"edit-icon"}
                                    />
                                    <Image
                                        src={"/assets/content-management/trash-icon.svg"}
                                        width={20}
                                        height={20}
                                        alt={"trash-icon"}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}