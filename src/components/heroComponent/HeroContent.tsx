"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utility/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Image from "next/image";

import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, PerspectiveCamera  } from "@react-three/drei";
import Robot from "../../../public/robot_playground/Robot";
// import Robot_playground from "../../../public/robot_playground/Robot_playground";
import { Suspense, useRef } from "react";


const HeroContent = () => {

  return (
    <motion.div initial="hidden" animate="visible"
      className="grid grid-cols-4 px-2 items-center justify-between max-w-[1360px] h-[100vh] mx-auto z-[20] border-2">
        {/* left */}
        <div className="col-span-2  flex justify-start">
          <div>        
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-2 px-2 border border-[#7042f88b] opacity-[0.9]">
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
            </motion.div>
            

            <motion.div
              variants={slideInFromLeft(0.5)}
              className="mt-4 text-6xl font-bold text-white">
                <h1>Hi, I&apos;m</h1>
                <TypeAnimation
                  sequence={[
                    'Shohanur Shohan',
                    1000,
                    'A Web Developer',
                    1000,
                    'A Freelancer',
                    1000,
                  ]}
                  speed={50}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                  repeat={Infinity}
                />
            </motion.div>
            

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px]">
                Proficient Web Developer with expertise in React, Tailwind, Next.js,
                WordPress & Webflow, specializing in crafting dynamic and visually
                appealing web solutions. Checkout my projects & skills.
              </motion.p>
              <motion.a variants={slideInFromLeft(1)} className="">
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-[16px] px-8 py-3 text-center me-2 mb-2">
                  <div className="flex items-center">
                    <span>
                      Hire Me
                    </span>
                    <svg
                      fill="none"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </button>
              </motion.a>
            </div>
        </div>

        {/* right */}
        <motion.div variants={slideInFromRight(1)}
         className="col-span-2 flex justify-end items-center sketchfab-embed-wrapper">
          {/* <motion.div variants={slideInFromRight(1)} className="animate-pulse">        
            <Image width={650} height={650} src={'/images/mainIconsdark.svg'} className="w-full" alt="skills-icons"/>
          </motion.div> */}
          
          <Canvas style={{ width: '100%', height: '100vh', marginBottom: '-200px' }}>
            <ambientLight/>
            <OrbitControls enableZoom={false}/>
            <PerspectiveCamera position={[0, -2, 0]} />
            <Suspense fallback={null}>
              <Robot/>
              {/* <Robot_playground /> */}
            </Suspense>
            <Environment preset={'sunset'}/>
            <ContactShadows opacity={0.6} position={[0,-1,0]} scale={10} resolution={256} blur={1} far={10} color={'#888'}/>

            
          </Canvas>

        </motion.div>
    </motion.div>
  )
}

export default HeroContent;



    
