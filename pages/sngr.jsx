import Image from "next/image";
import React from "react";
import sngrImg from "../public/assets/projects/sngr.png";

import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import Link from "next/link";

const research = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={sngrImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
            Selective Non-Gaussian Refinement (SNGR) for Ambiguous SLAM Factor
            Graphs
          </h2>
          <h3>Python</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>~/Projects/SNGR</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2 ">
            Standard SLAM solvers like iSAM2 assume the world is Gaussian, but
            range-only sensors and wrong data association create posteriors that
            aren't. I built a system that detects when this assumption breaks
            and selectively invokes non-Gaussian inference only where it
            matters. The trigger uses the condition number of the local
            covariance to identify geometrically uncertain windows. When it
            fires, nested sampling evaluates the true nonlinear factor graph
            likelihood (no linearization, no Gaussian assumption) and refines
            the estimate if it finds a better solution. At moderate noise levels
            this achieves precision = 1.0 with a 7.6× cost saving over running
            nested sampling everywhere.
          </p>
          <p>
            Takeaways: The detector has a blind spot at 10% contamination where
            NEES reaches 148× the consistent value but zero windows trigger.
            Covariance shape and covariance accuracy are independent properties,
            and a shape-based detector misses half the failures that matter. A
            bimodal proof-of-concept test showed iSAM2 converging to the saddle
            point between two modes, 12.49 nats below the true solution: not
            just wrong, but maximally wrong! In this test, the exploration of
            the non-gaussian posterior leads to naturally discovering equally
            likely modes! In larger maps, local window refinement improved
            likelihood but not global RMSE, revealing that distributed failures
            require global correction, not local patches. Building SNGR taught
            me that good research is about defining the operational scope
            precisely, not claiming the method works everywhere.
          </p>
          <p className="py-2 ">
            Check out the paper and code below if you want to learn more!
          </p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-4">
            <div className="logo-container logo-item mr-2 flex rounded-full shadow-lg shadow-[#8FC0A9] p-6">
              <a
                href="https://arxiv.org/abs/2604.22065"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FiFileText />
                </div>
              </a>
              <a
                href="https://github.com/anushkakulk/sngr-slam"
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
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> GTSAM
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

export default research;
