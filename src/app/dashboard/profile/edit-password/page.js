import ChangePassword from "@/components/profile/ChangePassword";
import Navbar from "@/components/Navbar";
export default function EditPassword() {
    return (
        <div className="w-screen h-screen font-montserrat">
            <Navbar />
            <ChangePassword />
            {/* <Profile modalIsOpen={isModalOpen} setModalIsOpen={setIsModalOpen} /> */}
        </div>
    )
}