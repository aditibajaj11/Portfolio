import React from "react";
import { skills } from "@/data";

const Skills = () => {
  return (
    <div className="pt-10 pb-20 bg-navy-700 text-white" id="skills">
      <h1 className="text-5xl font-bold text-center mb-10 text-purple-500">Skills</h1>

      {/* Skills Section */}
      <div className="px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 p-4 border border-white/30 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;




