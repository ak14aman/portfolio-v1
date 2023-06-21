import React from 'react'
import kg from '../../Assets/Images/kg.png'
import shiva from '../../Assets/Images/shiva.png'
import ncs from '../../Assets/Images/ncs.png'
import kv from '../../Assets/Images/kv.png'
import nitdgp from '../../Assets/Images/nitdgp.png'
import edc from '../../Assets/Images/edc.png'
import ieee from '../../Assets/Images/ieee.png'
import ingenium from '../../Assets/Images/ingenium.png'



const Timeline = () => {
  return (
    <div>
      <section id="timeline">
        <div className="container lg:pt-5">
            <div className='text-center'>
                <h2 className=' text-headingColor tracking-widest font-[800] text-[2.4rem] mb-5'>
                    TIMELINE
                </h2>
                <p className='lg:max-w-[650px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                A little back story: my father serves in the Navy, so over time I've resided at different places 
                at different times, and lost contact with quite a lot of good friends. Anyways, take a look and 
                do lemme know if we have crossed paths in the past :)                    
                </p>
            </div>

            <div className="flex flex-col justify-center sm:py-12">
                <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                    {/* vertical line running through middle */}
                    <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

                    {/* LEFT 1 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div 
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            LKG, UKG
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        2005 - 2007 <br/> Green Ways Academy School <br/> 104 Area, SVN Colony, Visakhapatnam, AP.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={kg} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT 2 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div 
                                    data-aos='fade-left'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            GRADE I - II
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        2007 - 2009 <br/> Shiva Shivani School <br/> Marripalem, Visakhapatnam, AP.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={shiva} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* LEFT 3 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div 
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            GRADE III - V
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        2009 - 2012 <br/> Navy Children School, Kochi <br/> Naval Base, Kochi, Kerala.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={ncs} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT 4 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div 
                                    data-aos='fade-left'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            GRADE VI
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        2012 - 2013 <br/> Kendriya Vidyalaya, Karwar <br/> Kadamba Vanam, Karwar.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={kv} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* LEFT 5 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div 
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            GRADE VII - IX
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        2013 - 2016 <br/> Navy Children School, Kochi <br/> Naval Base, Kochi, Kerala.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={ncs} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT 6 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div 
                                    data-aos='fade-left'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            GRADE X - XII
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        2016 - 2019 <br/> Navy Children School, Port Blair <br/> SCAS | Chanakya | Gyan (iykyk) <br/> Vijay Baugh, Port Blair, A&N.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={ncs} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* LEFT 7 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div 
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            NIT DURGAPUR
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        2019 <br/> Bachelor of Technology CSE <br/> Started Education <br/> Durgapur, West Bengal.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={nitdgp} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT 8 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div 
                                    data-aos='fade-left'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            Ingenium Edu.
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                         June 2022 - July 2022 <br/> Frontend Intern
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={ingenium} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* LEFT 9 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div 
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            EDC NIT Dgp
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        TREASURER | 2023 <br/> E-Summit '23
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={edc} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT 10 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div 
                                    data-aos='fade-left'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                            IEEE SB NIT Dgp
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        GENERAL SECRETARY | 2023 <br/> Tech X Congress
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={ieee} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* LEFT 11 Card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div 
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    className=" bg-white p-4 rounded shadow-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className='text-primaryColor font-[700] mb-2 group-hover:text-white group-hover:font-[600] text-xl'>
                                            NIT DURGAPUR
                                        </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] text-xl'>
                                        GRADUATED  <br/> Class of 2023 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={nitdgp} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>

        </div>
      </section>

    </div>
  )
}

export default Timeline
