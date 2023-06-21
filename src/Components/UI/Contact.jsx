import contact from '../../Assets/Images/contact1.jpeg'

import React from 'react'

const Contact = () => {

  return (
      <section id="contact">
        <div className="container">
            <h2 className='text-headingColor font-[700] text-[2.3rem] mb-5'>
            Get in Touch  :D
            </h2>
            <div className="md:flex justify-between items-center">
                <div className="w-full md:w-1/2 h-auto sm:h-[450px]">
                    <img 
                    className="rounded-[8px] flex w-full h-[450px] items-center justify-center"
                    src={contact} alt="" />
                </div>

                <div className="w-full mt-5 md:mt-0 md:w-1/2 sm:h-[450px] rounded-[8px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                    <form action="https://getform.io/f/cf2f7e6a-b10a-4b1c-bf07-b7b07dea4a2a" method="POST" className='w-full'>
                        <div className='mb-5'>
                            <input 
                            type="text" 
                            name="name"
                            placeholder="Enter your name"
                            className='w-full p-3 focus:outline-none rounded-[5px]'
                            />
                        </div>
                        <div className='mb-5'>
                            <input 
                            type="email" 
                            name="email"
                            placeholder="Enter your Email"
                            className='w-full p-3 focus:outline-none rounded-[5px]'
                            />
                        </div>
                        <div className='mb-5'>
                            <input 
                            type="text" 
                            name="subject"
                            placeholder="Subject"
                            className='w-full p-3 focus:outline-none rounded-[5px]'
                            />
                        </div>
                        <div className='mb-5'>
                            <textarea 
                            type="text" 
                            name="message"
                            rows={3}
                            placeholder="Write your message"
                            className='w-full p-3 focus:outline-none rounded-[5px]'
                            />
                        </div>

                        <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                            Send Message!
                        </button>

                    </form>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Contact
