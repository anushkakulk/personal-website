import Image from "next/image";
import React from "react";
import tictactoegame from '../public/assets/projects/tictactoegameplay.gif'
import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const tictactoe = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="contain"
          src={tictactoegame}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">TicTacToe Playing Robot Arm</h2>
          <h3>ROS, Python</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>~/Projects/TicTacToeBot</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2 ">
            While studying Robotic Science and Systems, I had the opportunity to apply what I was learning regarding kinematics, computer vision, path planning, and homogenous transformations and build a cool project. 
            Landing on a tictactoe playing robot arm, I worked with a team of developers to make this fun prospect a reality! The major task of getting the robot to play was split into 4 manageable
            tasks, focusing on Computer Vision (Task: Detect the drawn board, X’s and O’s, and
            update an internal gamestate), Manipulation (Task: Program the Robot to draw a
            recognizable O shape), Interfacing Computer Vision and Manipulation (Task: Find the
            transformation from board in camera’s frame to board in robot’s frame), and Optimal
            Move (Task: Use a minimax algorithm that will always choose the best open square for
            the robot to make its next move based on CV parsed gamestate). 
          </p>
          <p className="py-2 ">
              Challenges were certainly present, especially when it came to the computer vision aspect of the project. Rather than opting for a convolutional neural network to train the robot to recognize the shapes, we decided to use more traditional CV to detect the board, X’s and O’s. 
              This was a great learning experience as I was able to understand the limitations of traditional CV, as a lot of the time, the robot would not be able to detect the board or the pieces when moved to different locations with different lighting, needing on the fly changes to pre-processing thresholds.
              Similarly, the robot itself was a challenge to work with, as the robot arm was not as precise as I would have liked, leading to a lot of trial and error when it came to drawing the O’s. The inverse kinematics to determine the location of the end effector gets calculated correctly, yet as the end effector moves further from its base, the error in the end effector’s location increases.
              Regardless, the project was a great success, and I was able to learn a lot about being adaptable when faced with challenges, in addition to robotics, computer vision, and software development in the process!
          </p> 
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-4">
            <div className="logo-container logo-item mr-2 flex rounded-full shadow-lg shadow-[#8FC0A9] p-6">
              <a
                href="https://github.com/ayushzenith/CS4610"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsCodeSlash />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl sm:h-[50%] shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> ROS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> OpenCV
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Interbotix Widow-X 250
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

export default tictactoe;
