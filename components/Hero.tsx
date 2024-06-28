import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaFileDownload } from 'react-icons/fa';
import Image from 'next/image'; 

const Hero = () => {
  return (
    <div className='pb-20 pt-36 relative' id='about'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center relative my-20 z-10 max-w-7xl mx-auto'>
        
        <div className='flex-shrink-0 mb-10 md:mb-0 md:mr-10'>
          <Image 
            src="/about.jpg" 
            alt="Aditi Bajaj"
            width={280}
            height={280}
            className='rounded-full object-cover shadow-lg mb-18 mr-10'
          />
        </div>

        <div className='flex flex-col items-center md:items-start max-w-xl text-center md:text-left'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 mb-2'>
            Dynamic web magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-[30px] md:text-3xl lg:text-4xl font-bold mb-4"
            words=' Hi, I&apos;m Aditi Bajaj'
          />
          
          <p className='text-sm md:text-lg lg:text-xl mb-5'>
            I&apos;m a passionate Full Stack Web Developer proficient in C, C++, and Java, currently in my 4th year of engineering with a strong academic record. I secured 96.8% in my 12th grade, 97% in my 10th grade, and have maintained a good CGPA in college. Also, I bring a strong work ethic and a keen eye for detail to every project. Dedicated to continuous learning, I excel at solving complex problems and delivering high-quality, innovative solutions. Eager to make my mark in the tech industry, I am excited to contribute my skills and enthusiasm to impactful projects.
          </p>
          <a href="/path/to/your/resume.pdf" download>
            <MagicButton
              title="Download Resume"
              icon={<FaFileDownload />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
