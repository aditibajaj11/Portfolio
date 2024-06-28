import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import Image from 'next/image'; 

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px]' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        
        <Image
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-50'
          layout='fill' 
        />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to bring fresh <span className='text-purple'>ideas</span> to your team?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me if you're looking for a dedicated professional ready to hit the ground running.
        </p>
        <a href='mailto:bajajaditi1122@gmail.com'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Aditi
        </p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <a key={profile.id} href={profile.link} target='_blank' rel='noopener noreferrer'>
              <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
               
                <Image
                  src={profile.img}
                  alt={String(profile.id)}
                  width={20}
                  height={20}
                  layout='fixed' 
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;



