"use client"
import Navbar from "@/components/Navbar";
import DetailProfile from "@/components/profile/DetailProfile";
// import Profile from "@/components/dashboard/Profile";
export default function Profile() {
    return (
        <div className="w-screen h-screen font-montserrat">
            <Navbar />
            <DetailProfile />
            {/* <Profile modalIsOpen={isModalOpen} setModalIsOpen={setIsModalOpen} /> */}
        </div>
    )
}