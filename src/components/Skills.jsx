import React from 'react';
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaSass
} from 'react-icons/fa';

const Skills = () => {
  return (
    <>
      {skills.map(({ icon, title}, index) => {
        return (
          <div className='progress__box' key={index}>
            <div className='skills__icon'>{icon}</div>
            <h3 className='skills__title'>{title}</h3>
          </div>
        );
      })}
    </>
  );
  // return (
  //   <>
  //     {skills.map(({ icon, title, percentage }, index) => {
  //       return (
  //         <div className='progress__box' key={index}>
  //           <div className='progress__circle'>
  //             <CircularProgressbar
  //               strokeWidth={7.5}
  //               text={`${percentage}%`}
  //               value={percentage}
  //             />
  //           </div>

  //           <h3 className='skills__title'>{title}</h3>
  //         </div>
  //       );
  //     })}
  //   </>
  // );
};

export default Skills;
