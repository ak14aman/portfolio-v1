import React from 'react'
import aman from '../../Assets/Images/aman.jpg'

const About = () => {
  return (
    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
            {/* About left content */}
            <div className='w-full md:basis-1/2'>
                <h5
                data-aos='fade-right'
                data-aos-duration='1500'
                className='text-headingColor font-[600] text-[17px]'
                >
                Hey there, Welcome!
                </h5>
                <h1
                data-aos='fade-up'
                data-aos-duration='1500'
                className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
                >
                I am Aman Kumar <br/> 
                Software Developer
                </h1>
                <div 
                data-aos='fade-up'
                data-aos-duration='1800'
                data-aos-delay='200'
                className='flex items-center gap-3 mt-7'
                >
                    <a href='#contact'>
                        <button className='bg-primaryColor shadow-md text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-induration-300 py-2 px-4 rounded-[8px]'>
                            <i class="ri-mail-line"></i>Hire Me 
                        </button>
                    </a>
                    <a href='https://drive.google.com/drive/u/0/folders/1sptJdI0IzfilXbpw_utjpP9y2YdnP6z0'
                    className='text-smallTextColor shadow-md font-[600] text-[16px] py-2 px-4 border rounded-[8px] border-solid border-smallTextColor flex items-center gap-2 hover:text-primaryColor hover:border-primaryColor ease-induration-300'>
                    <i class="ri-file-list-3-line"></i>CV/Resume
                    </a>                   
                </div>

                <p
                data-aos='fade-left'
                data-aos-duration='1500'
                className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-6 sm:pl-14 sm:pr-10'
                >
                    <span><i class="ri-apps-2-line"></i></span>
                Energetic and Passionate individual with the mindset of getting things done.
                Enjoys cinemas, sports, designing, and journalling.
                Dosen't mind getting hands dirty, also still figuring out best way to pay bills :D
                </p>

                <div 
                data-aos='fade-left'
                data-aos-duration='1500'
                className='flex items-center gap-9 mt-14'>
                <span className='text-smallTextColor text-[18px] font-[600]'>
                Connect with me:
                </span>
                <span>
                    <a href='https://www.linkedin.com/in/amankumar1402/' 
                    className='text-smallTextColor text-[18px] font-[600]  hover:text-primaryColor'>
                        <i class="ri-linkedin-box-fill"></i></a>
                </span>
                <span>
                    <a href='https://github.com/ak14aman' 
                    className='text-smallTextColor text-[18px] font-[600]  hover:text-primaryColor'>
                        <i class="ri-github-fill"></i></a>
                </span>
                <span>
                    <a href='https://www.instagram.com/ak14aman' 
                    className='text-smallTextColor text-[18px] font-[600]  hover:text-primaryColor'>
                        <i class="ri-instagram-line"></i></a>
                </span>
                <span>
                    <a href='https://www.facebook.com/profile.php?id=100037520656634' 
                    className='text-smallTextColor text-[18px] font-[600]  hover:text-primaryColor'>
                        <i class="ri-facebook-circle-fill"></i></a>
                </span>
                
                </div>
            </div>
            {/* About left content END */}

            {/* Aman Image */}
            <div className='basis-1/3 mt-10 sm:mt-0'>
            <figure
            data-aos='fade-up'
            data-aos-duration='1000'
            className='flex items-center justify center'>
            <img
                src={aman}
                class="h-auto max-w-full rounded-full shadow-xl shadow-headingColor/20 dark:shadow-headingColor/40"
                alt="" />
            </figure>
            </div>
            {/* Aman Image END*/}
            </div>
        </div>
    </section>
  )
}

export default About
