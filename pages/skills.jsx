import React, { useState, useEffect } from "react";
import { FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus, SiMysql, SiRos, SiPytorch, SiDocker } from "react-icons/si";

const experience = [
  {
    company: "Amazon Robotics",
    role: "Sensor Embedded Software, Co-op",
    date: "Jul 2024 to Dec 2024 · Aug 2025 to Dec 2025 · North Reading, MA",
    badge: "Co-op · 2 terms",
    badgeColor: "teal",
    bullets: [
      { text: "Engineered C drivers and Python software for calibration and operation of a next-gen indirect time-of-flight sensor on NVIDIA Jetson Orin", highlight: "NVIDIA Jetson Orin" },
      { text: "Automated motor-based 2D/3D camera calibration system, achieving 40% faster alignment and reprojection error under 0.02 px", highlight: "40% faster alignment" },
    ],
  },
  {
    company: "Meta",
    role: "Production Systems Engineer, Intern",
    date: "May 2025 to Aug 2025 · Menlo Park, CA",
    badge: "Intern",
    badgeColor: "blue",
    bullets: [
      { text: "Deployed a containerized microservice with CI/CD to automate health checks for NVIDIA GB300 liquid-cooled GPU servers", highlight: "NVIDIA GB300 liquid-cooled GPU servers" },
      { text: "Built 75+ hardware and config checks validating servers at datacenter cluster scale" },
    ],
  },
  {
    company: "NASA Jet Propulsion Laboratory",
    role: "Flight Software Intern, Mars Sample Return",
    date: "Jan 2025 to Mar 2025 · Remote",
    badge: "Intern",
    badgeColor: "amber",
    bullets: [
      { text: "Developed C-based testing frameworks for the Mars Sample Return Lander's vision compute element, including 3D pose estimation algorithms" },
      { text: "Benchmarked Kalman filtering and ML-based image processing, achieving 50% faster processing than Mars 2020", highlight: "50% faster processing" },
    ],
  },
];

const skillsList = [
  { name: "Python", Icon: FaPython, proficiency: 92, note: "Amazon, Meta, JPL, coursework" },
  { name: "C / C++", Icon: SiCplusplus, proficiency: 85, note: "Sensor drivers, flight software, AerospaceNU" },
  { name: "Java", Icon: FaJava, proficiency: 80, note: "4 years, OOD, AP CS, Fundamentals" },
  { name: "ROS2", Icon: SiRos, proficiency: 78, note: "SLAM, motion planning, robot control" },
  { name: "PyTorch", Icon: SiPytorch, proficiency: 75, note: "Robot Grasp CNN, ML and NLP coursework" },
  { name: "JavaScript / TS", Icon: IoLogoJavascript, proficiency: 72, note: "This site :) and SE coursework" },
  { name: "Docker", Icon: SiDocker, proficiency: 70, note: "Microservices at Amazon and Meta" },
  { name: "SQL", Icon: SiMysql, proficiency: 65, note: "Database Design, Meta health checks" },
];

const toolGroups = [
  {
    title: "Robotics & embedded",
    items: ["ROS2", "CUDA", "OpenCV", "PCL", "iSAM2", "Kalman filtering", "NVIDIA Jetson", "Yocto"],
  },
  {
    title: "ML & data",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "pandas"],
  },
  {
    title: "Infrastructure & dev",
    items: ["Git", "Linux", "Docker", "CI/CD", "AWS", "React", "Node.js"],
  },
  {
    title: "Coursework",
    items: [
      "Algorithms & Data",
      "Machine Learning & Data Mining",
      "Artificial Intelligence",
      "Robotic Science and Systems",
      "Mobile Robotics",
      "Natural Language Processing",
      "Computer Systems",
      "Object Oriented Design",
      "Digital Design and Computer Architecture",
      "Database Design",
      "Robot Dynamics and Control",
    ],
  },
];

const badgeStyles = {
  teal: "bg-[#E6F4EF] text-[#2F6A5F]",
  blue: "bg-[#E6EEF8] text-[#1E4A80]",
  amber: "bg-[#FBF0DC] text-[#7A4C0A]",
};

const renderWithHighlight = (text, highlight) => {
  if (!highlight) return text;
  const parts = text.split(highlight);
  return (
    <>
      {parts[0]}
      <span className="inline-block bg-[#F0FAF4] text-[#2F6A5F] text-xs font-medium rounded px-1.5 py-0.5 ml-1">
        {highlight}
      </span>
      {parts[1]}
    </>
  );
};

const TimelineItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mb-7 last:mb-0 pl-7">
      <div
        className={`absolute left-0 top-2.5 w-2.5 h-2.5 rounded-full border-2 bg-white transition-colors duration-200 ${
          open ? "border-[#3F8B7D]" : "border-slate-300"
        }`}
      />
      <div
        className={`bg-white border rounded-2xl px-5 py-4 cursor-pointer transition-all duration-200 hover:translate-x-0.5 ${
          open ? "border-[#3F8B7D]" : "border-slate-200 hover:border-slate-300"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="font-medium text-slate-900">{item.company}</p>
            <p className="text-sm text-slate-500 mt-0.5">{item.role}</p>
            <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>
          </div>
          <span className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full ${badgeStyles[item.badgeColor]}`}>
            {item.badge}
          </span>
        </div>
        {open && (
          <ul className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            {item.bullets.map((b, i) => (
              <li key={i} className="text-sm text-slate-500 leading-relaxed pl-3 relative">
                <span className="absolute left-0 text-[#68B0AB]">·</span>
                {renderWithHighlight(b.text, b.highlight)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const SkillCard = ({ skill, animate }) => {
  const Icon = skill.Icon;
  return (
    <div className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-[#3F8B7D] transition-colors duration-200">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[#3F8B7D]">
          <Icon size={20} />
        </span>
        <p className="text-sm font-medium text-slate-900">{skill.name}</p>
      </div>
      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#68B0AB] to-[#3F8B7D] transition-all duration-700 ease-out"
          style={{ width: animate ? `${skill.proficiency}%` : "0%" }}
        />
      </div>
      <p className="text-xs text-slate-400 mt-2 leading-snug">{skill.note}</p>
    </div>
  );
};

const Skills = () => {
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setBarsAnimated(true), 50);
  }, []);

  return (
    <div id="skills" className="w-full py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-[1240px]">

        <div className="space-y-12">
          <section>
            <div className="mb-6">
              <p className="text-lg uppercase tracking-[0.3em] text-[#3F8B7D]">Experience</p>
            </div>
            <div className="relative pl-4">
              <div className="absolute left-1.5 top-2 bottom-2 w-px bg-slate-200" />
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-6">
              <p className="text-lg uppercase tracking-[0.3em] text-[#3F8B7D]">Skills</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {skillsList.map((skill, i) => (
                <SkillCard key={i} skill={skill} animate={barsAnimated} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-6">
              <p className="text-lg uppercase tracking-[0.3em] text-[#3F8B7D]">Tools & coursework</p>
            </div>
            <div className="flex flex-col gap-6">
              {toolGroups.map((group) => (
                <div key={group.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-3">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-sm text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1.5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Skills;