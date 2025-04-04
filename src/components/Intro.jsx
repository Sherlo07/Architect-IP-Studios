import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import building from "../assets/building.png";
import arch1 from "../assets/arch1.avif";
import arch2 from "../assets/arch2.avif";
import arch3 from "../assets/arch3.avif";
import arch4 from "../assets/arch4.avif";
import arch5 from "../assets/arch5.avif";

const Intro = () => {
  const images = [arch1, arch2, arch3, arch4, arch5];
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center bg-[#f2f2f2] min-h-screen">
      <div className="max-w-[1250px] bg-white w-full p-10">
        <p className="text-sm text-neutral-500 mb-3">
          Architect & Interior Designers
        </p>

        <div className="flex items-center gap-5">
          <p className="text-4xl font-semibold text-[#D91656]">IP Studios</p>
          <a href="https://www.linkedin.com/company/zaha-hadid-architects/">
            <img src={building} className="h-8" alt="Building" />
          </a>
        </div>

        <p className="text-[#6a6a72] text-justify mt-3 leading-relaxed">
          I am Zaha Hadid, an architect known for my innovative and futuristic
          designs. As the founder of Zaha Hadid Architects, I created iconic
          structures like the Heydar Aliyev Center. I was the first woman to
          receive the Pritzker Architecture Prize, shaping the future of modern
          architecture.
        </p>

        <div className="flex gap-3 mt-6">
          <a href="https://www.linkedin.com/company/zaha-hadid-architects/">
            <img src={linkedin} className="h-6" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} className="h-6" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={facebook} className="h-6" alt="Facebook" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Architecture ${index + 1}`}
              className="h-[300px] w-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="p-6 hover:bg-[#fafafa] rounded-lg">
              <p className="text-md font-semibold">
                Innovative Design Solutions
              </p>
              <p className="text-sm text-neutral-500 mt-2">
                We specialize in crafting creative and functional architectural
                designs that blend aesthetics with practicality.
              </p>
            </div>

            <div className="p-6 hover:bg-[#fafafa] rounded-lg mt-6">
              <p className="text-md font-semibold">Client-Centric Approach</p>
              <p className="text-sm text-neutral-500 mt-2">
                Our design process revolves around understanding each client's
                vision and transforming their ideas into reality.
              </p>
            </div>
          </div>

          <div>
            <div className="p-6 hover:bg-[#fafafa] rounded-lg">
              <div className="flex items-center gap-2">
                <IoMdMail className="text-xl" />
                <p className="font-semibold">Stay up to date</p>
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                Get notified when I publish something new, and unsubscribe at
                any time.
              </p>
              <div className="flex mt-3 gap-2">
                <input
                  className="w-full md:w-[350px] px-3 py-2 text-sm border-2 rounded-lg border-gray-200"
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bg-black text-white px-4 py-2 text-xs font-semibold rounded-lg">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[350px] mt-10">
          <video
            src="https://videos.pexels.com/video-files/31422854/13404305_1920_1080_30fps.mp4"
            playsInline
            autoPlay
            muted
            loop
            preload="auto"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
