import React from "react";
import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ReactTypingEffect from "react-typing-effect";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full mx-auto h-full p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#696D7D]">
            hey, i'm{" "}
            <span className="text-[#68B0AB]">
              <ReactTypingEffect
                text="anushka!"
                eraseDelay={4000}
                eraseSpeed={100}
                typingDelay={1000}
              />
            </span>
          </h1>
          <p className="py-4 text-gray-600 max-w-[75%] sm:max-w-[50%] m-auto">
            Recent graduate from Northeastern University with a B.S. in Computer
            Science, passionate about robotics, AI, and the systems that power
            them. I've worked at Amazon Robotics, Meta, and NASA JPL building
            perception systems, AI infrastructure, and flight software.
            Currently exploring SLAM, computer vision, motion planning, and
            scalable AI infrastructure (and of course, responsive web
            applications; exhibit a: this site :)).
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="logo-container logo-item rounded-full shadow-lg shadow-[#8FC0A9] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/anushkakulk"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="logo-container logo-item rounded-full shadow-lg shadow-[#8FC0A9] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="https://github.com/anushkakulk"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div className="logo-container logo-item rounded-full shadow-lg shadow-[#8FC0A9] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="mailto:anushka.mkul@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
