import React from "react";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../public/assets/covers/profile.png";

const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-16 xl:py-40">
        <div className="col-span-2">
          <h2 className="uppercase text-3xl pt-10 tracking-widest text-[#68B0AB]">
            <ReactTypingEffect
              text="About Me"
              eraseDelay={5000}
              eraseSpeed={100}
              typingDelay={1000}
            />
          </h2>
          <div className="py-5">
            <p className="py-2">
              Originally from Delaware, I was lucky to attend a high school
              where computer science was taught in depth. I will never forget
              the enjoyment of staying past the normal class time to finish
              coding a sudoku game in Java and tinkering around in Blender in
              2018. Since then, I fell in love with the problem-solving and
              thinking outside the box that programming offers.
            </p>
            <p className="py-2">
              I recently graduated from Northeastern University with a B.S. in
              Computer Science, concentrating in Artificial Intelligence with a
              minor in Robotics. During my time there, I dove deep into robotics
              perception, SLAM algorithms, and machine learning, whether it be
              in the classroom or through research on code LLMs and perception
              systems for autonomous robots.
            </p>
            <p className="py-2">
              Throughout my college experience, I had the incredible opportunity
              to work on production systems and apply what I've learned in the
              classroom. At Amazon Robotics, I built sensor fusion pipelines and
              calibration systems for next-generation autonomous robots. At
              Meta, I deployed infrastructure for liquid-cooled GPU clusters
              powering AI inference at datacenter scale. And at NASA's Jet
              Propulsion Laboratory, I benchmarked flight software and
              perception algorithms for the Mars Sample Return mission—work.
            </p>
            <p className="py-2">
              I really value the process of learning and work best when thrown
              into unknown territory. Whether it's optimizing embedded systems,
              scaling infrastructure, or building perception algorithms for
              space exploration, I'm excited to keep pushing the boundaries of
              what's possible in robotics and AI.
            </p>
          </div>
        </div>

        <div className="image-item">
          <div className="col-span-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-.5 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={profilepic}
              alt="/"
              width="325"
              height="75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
