"use client";

import Image from "next/image";
import NavBar from "../NavBar";
import { useState } from "react";

const Page = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={`bg-secondaryDark w-full h-screen overflow-hidden`}>
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <div className="w-11/12 max-w-4xl h-auto bg-primary flex flex-col md:flex-row border-black border-8 shadow-white shadow-3xl p-5 md:p-10">
          <Image
            src="/dhurgesh.jpeg"
            alt="About Me Image"
            width={600}
            height={600}
            className="md:w-1/2 w-full p-5 md:p-20 object-contain"
          />
          <div className="flex flex-col text-2xl p-5 md:mt-0 md:w-1/2 text-center md:text-left">
            <h1 className="text-h1 text-white">ABOUT ME</h1>
            <br />
            <p className="font-mono text-white text-sm">
              Enthusiastic and detail-oriented Bachelor of
              Computer Application student with a strong
              background in programming and web development.
              Seeking a challenging position to leverage my
              problem-solving skills, technical expertise, and passion
              for continuous learning in a dynamic work environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
