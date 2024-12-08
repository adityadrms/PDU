"use client";
import { useState } from "react";
import Image from "next/image";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const backgroundImage = {
    backgroundImage: "url('/assets/login/bg_login.png')",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };

  return (
    <div
      style={backgroundImage}
      className="flex flex-col h-screen justify-center items-center"
    >
      <div className="flex flex-col md:flex-row w-full md:w-[80%] lg:w-[60%] lg:h-[70%] bg-white rounded-3xl">
        <div className="relative h-[30vh] w-full md:h-full md:w-[50%]">
          <Image
            className="object-cover h-full w-full rounded-t-3xl md:rounded-e-none md:rounded-s-3xl"
            src="/assets/login/rig.png"
            alt="rig"
            height={500}
            width={500}
            priority
          />
        </div>

        <div className="h-full w-full md:w-[50%] flex flex-col justify-evenly items-center p-[5%] bg-white rounded-3xl">
          <div
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
            className=" h-[15%] w-auto rounded-full shadow-lg p-1"
          >
            <Image
              className="w-full h-full"
              src="/assets/login/logo.png"
              alt="logo"
              height={100}
              width={100}
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="font-montserrat font-bold lg:text-2xl 2xl:text-3xl text-dark-500">
              Welcome!
            </p>
            <p className="font-montserrat text-black 2xl:text-lg">
              Pelase enter your details
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full items-center"
          >
            <label
              form="email"
              htmlFor="email"
              className="text-dark-500 self-start font-montserrat"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 my-2 rounded-lg bg-pink-pdu-500 text-dark-500"
            />
            <label
              htmlFor="password"
              className="text-dark-500 self-start font-montserrat"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 my-2 rounded-lg bg-pink-pdu-500 text-dark-500"
            />
            <button
              type="submit"
              className="w-full p-2 my-2 rounded-lg bg-orange-pdu-500 hover:opacity-70 text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
