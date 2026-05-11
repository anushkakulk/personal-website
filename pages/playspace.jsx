import Image from "next/image";
import React from "react";
import playspaceImg from "../public/assets/projects/playspace.png";

import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import Link from "next/link";

const website = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={playspaceImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
            PlaySpace! - A Social Online Platform for Playing Board Games
          </h2>
          <h3>React / TypeScript / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>~/Projects/PlaySpace</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2">
            PlaySpace is a comprehensive social gaming platform developed as a
            team project for Software Engineering coursework, where users can
            play board games like Tic-Tac-Toe, connect with friends, and engage
            in a moderated community. As part of a four-person team, I
            contributed to building features that prioritized user safety,
            social interaction, and competitive gameplay.
          </p>
          <p className="py-2">
            The platform includes a competitive leaderboard system, friends
            system, AI-powered chat and forum moderation with Claude API,
            private profiles, private messaging, OAuth 2.0 integration for
            social media verification (Twitch, YouTube), game forfeiting with
            inactivity detection, and customizable profile backgrounds. Working
            in an agile environment with weekly sprints taught me the importance
            of clear communication, collaborative problem-solving, and balancing
            feature development with thorough testing. This project deepened my
            understanding of full-stack development, real-time communication
            with Socket.io, and building scalable, user-focused applications.
          </p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-4">
            <div className="logo-container logo-item mr-2 flex rounded-full shadow-lg shadow-[#8FC0A9] p-6">
              <a
                href="https://github.com/neu-cs4530/spring26-project-group-301-1"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsCodeSlash />
                </div>
              </a>
              <a
                href="https://spring26-project-group-301.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FiExternalLink />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Socket.io
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Claude API
              </p>
            </div>
          </div>
        </div>
        <Link href="/projects">
          <p className="underline cursor-pointer py-5">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default website;
