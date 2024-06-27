import React from 'react';
import { interest } from '@/data';
import { IconType } from 'react-icons'; // Import IconType
import { FaChessKnight, FaUtensils, FaFilm, FaSpa, FaHandsHelping } from 'react-icons/fa'; // Import icons
import { Button } from './ui/MovingBorders';

// Define type for interests
interface Interest {
  title: string;
  icon: React.ReactNode; // Change the type to React.ReactNode
  description: string;
}

// Create a map of icon names to actual icon components
const iconMap: Record<string, IconType> = {
  FaChessKnight: FaChessKnight,
  FaUtensils: FaUtensils,
  FaSpa: FaSpa,
  FaHandsHelping: FaHandsHelping,
};

const Interest: React.FC = () => {
  return (
    <div className='py-20' id='interest'>
      <h1 className='heading'>
        Beyond <span className='text-purple'>the code</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {interest.map((interest: Interest, index: number) => (
            
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
              width: "100%", 
            }}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <div className="flex items-center justify-center mb-5">
                <div style={{ fontSize: '3rem' }}>{interest.icon}</div> 
              </div> 
              <div className="flex flex-col">
                <h3 className='mt-4 text-start text-xl md:text-2xl font-bold'>{interest.title}</h3>
                <p className='mt-3 text-start text-white-100 font-semibold'>{interest.description}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Interest;









