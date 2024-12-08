"use client";
import React from "react";
import Modal from "react-modal";
import Image from "next/image";

const Profile = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Profile Modal"
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.3)" },
        content: {
          top: "80px",
          left: "auto",
          right: "5%",
          borderRadius: "24px",
          maxWidth: "90%",
          width: "250px",
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          zIndex: "9999",
          position: "absolute",
        },
      }}
    >
      <div className="flex flex-col h-full w-full justify-between items-center font-montserrat text-sm pb-[10%] text-black relative">
        <div className="flex w-full h-[100px] bg-[url('/assets/layout/rig.png')] bg-cover bg-bottom relative justify-center items-center">
          <Image
            src={"/assets/layout/profile.svg"}
            width={100}
            height={100}
            className="absolute w-[20%] h-auto bottom-[-25%]"
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center mt-[15%]">
          <p className="font-bold mb-1">Client PDU 1</p>
          <p className="">client1@pdu.com</p>
          <div className="flex flex-row cursor-pointer mt-6 justify-end items-center text-orange-pdu-500 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="currentColor"
            >
              <path
                d="M2.5 18C1.95 18 1.47933 17.8043 1.088 17.413C0.696667 17.0217 0.500667 16.5507 0.5 16V2C0.5 1.45 0.696 0.979333 1.088 0.588C1.48 0.196667 1.95067 0.000666667 2.5 0H9.5V2H2.5V16H9.5V18H2.5ZM13.5 14L12.125 12.55L14.675 10H6.5V8H14.675L12.125 5.45L13.5 4L18.5 9L13.5 14Z"
                fill="#E75C33"
              />
            </svg>
            <p className="font-bold ms-2">Logout</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Profile;
