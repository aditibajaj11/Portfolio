import React from 'react';
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image'; // Import Image from next/image

const RecentProjects = () => {
  return (
    <div className='pt-20 pb-10' id='projects'>
      <h1 className='heading'>
        A small selection of{' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 max-w-6xl mx-auto mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-6 lg:mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <Image
                    src={img}
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                  />
                </div>
                <Image
                  src='/bg.png'
                  alt='bg-img'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  className='z-10 absolute bottom-0'
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex justify-center items-center'>
                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                  Check Live Site
                </p>
                <FaLocationArrow className='ms-3' color='#CBACF9' />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;






