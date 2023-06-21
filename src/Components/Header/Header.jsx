import React, {useState} from 'react'
import spidey from '../../Assets/Images/spidey.jpg'


const Header = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <header className='  sticky top-0 z-50 w-full h-[70px] leading-[80px] flex items-center bg-white/20 backdrop-blur-sm'>
        <div className='container '>
            <div className='flex items-center justify-between'>
                {/* LOGO */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify center'>
                    <img
                        src={spidey}
                        class="h-auto max-w-full rounded-full"
                        alt="..." />
                    </span>
                    <div className='leading-[20px]'>
                        <h1 className='text-l md:text-xl text-smallTextColor font-[700]'>Aman Kumar</h1>
                        <p className='text-smallTextColor text-[13px] md:text-[15px] font-[500]'>
                            Portfolio @v1
                        </p>
                    </div>
                </div>
                {/* LOGO END */}

                {/* MENU start */}
                <div className="menu">
                    <ul className=' hidden md:flex items-center ml-20 gap-10'>
                        <li>
                            <a className='text-smallTextColor font-[600]' href="#about">About</a>
                        </li>
                        <li>
                            <a className='text-smallTextColor font-[600]' href="#timeline">Timeline</a>
                        </li>
                        <li>
                            <a className='text-smallTextColor font-[600]' href="#projects">Projects</a>
                        </li>
                        <li>
                            <a className='text-smallTextColor font-[600]' href="#experience">Experience</a>
                        </li>
                        <li>
                            <a className='text-smallTextColor font-[600]' href="#contact">Contact</a>
                        </li>
                        
                    </ul>
                </div>

                {/* responsive */}
                <div className="menu">
                    <ul className={`  duration-300  md:hidden fixed  bg-headingColor  top-[70px] leading-7 w-full h-auto 
                    ${toggle?'left-[0]':'left-[100%]'}`}>
                        <li>
                            <a className='text-gray-200 font-[600] p-10 ' href="#about">About</a>
                        </li>
                        <li>
                            <a className='text-gray-200 font-[600] p-10' href="#timeline">Timeline</a>
                        </li>
                        <li>
                            <a className='text-gray-200 font-[600] p-10' href="#projects">Projects</a>
                        </li>
                        <li>
                            <a className='text-gray-200 font-[600] p-10' href="#experience">Experience</a>
                        </li>
                        <li>
                            <a className='text-gray-200 font-[600] p-10' href="#contact">Contact</a>
                        </li>
                        
                    </ul>
                </div>

                {/* MENU end */}

                {/* MENU right */}
                <div className="flex items-center gap-4">
                <button className='flex text-[15px] md:text-l items-center gap-2 shadow-md text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-2.5 md:py-2 md:px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white  ease-in duration-300'>
                <i class="ri-send-plane-line"></i>Go to my Blog!
                </button>

                {
                    toggle?
                    <span onClick={()=> setToggle(!toggle)} className='text-3xl text-smallTextColor md:hidden cursor-pointer'><i class="ri-close-line"></i></span>
                    :
                    <span onClick={()=> setToggle(!toggle)} className='text-2xl text-smallTextColor md:hidden cursor-pointer'><i class="ri-menu-line"></i></span>

                }
                
               </div>
                {/* MENU right end */}

            </div>
        </div>
    </header>
  );
};

export default Header;
