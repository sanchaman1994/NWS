import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        />
      </div>
      <h3
        className="flex items-end gap-2 
        text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Sanchaman Nembang{" "}
        <Image src={assets.hand_icon} alt="icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-Ovo">
        I'm a full-stack developer with a passion for creating web applications.
      </h1>
      <p>
        I am a full-stack developer with a passion for creating web
        applications. I have experience in building web applications using
      </p>
      <div className="flex flex-col sm:flex-row items-cnter gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex
          items-center gap-2 "
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume
          <Image src={assets.download_icon} alt="arrow" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
