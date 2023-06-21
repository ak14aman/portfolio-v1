import React from 'react';

import HTML from '../../Assets/Images/skills/html.png';
import CSS from '../../Assets/Images/skills/css.png';
import JavaScript from '../../Assets/Images/skills/javascript.png';
import react from '../../Assets/Images/skills/react.png';
import Node from '../../Assets/Images/skills/node.png';
import FireBase from '../../Assets/Images/skills/firebase.png';
import GitHub from '../../Assets/Images/skills/github.png';
import Tailwind from '../../Assets/Images/skills/tailwind.png';
import Mongo from '../../Assets/Images/skills/mongo.png';
import cpp from '../../Assets/Images/skills/cpp.png';
import python from '../../Assets/Images/skills/python.png';
import mui from '../../Assets/Images/skills/mui.png';


// html     css     javascript      react   node    C/C++       python      firebase   mongo     tailwindcss     material ui         github


const Skills = () => {
  return (
    <section id="experience">
        <div className="container">
            <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor text-[2.3rem] font-[700]">
                    Experience
                    </h3>
                    <p className='mb-4 font-[550]'>These are the technologies I've worked with:</p>
                </div>


                <div className='grid grid-center grid-cols-4 sm:grid-cols-6 gap-7 items-center py-5'>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[4px]' src={cpp} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={python} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={HTML} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={CSS} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={JavaScript} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={react} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={GitHub} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={Tailwind} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={mui} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={Node} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={FireBase} alt="" />
                        </figure>
                    </div>

                    <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                        <figure>
                            <img className='rounded-[8px]' src={Mongo} alt="" />
                        </figure>
                    </div>


                </div>


        </div>
    </section>
  );
};

export default Skills;