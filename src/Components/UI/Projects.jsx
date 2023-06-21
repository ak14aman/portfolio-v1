import React, {useState} from 'react'
import data from '../../Assets/Data/projectData'
import Model from './Model'

const Projects = () => {

    const [nextItems, setNextItems]=useState(6)
    const [portfolios, setPortfolios] = useState(data)
    const [showModel, setShowModel] = useState(false)
    const [activeID, setActiveID] = useState(null)


    const showModelHandler = id => {
        setShowModel(true)
        setActiveID(id)
    }

    const loadMoreHandler = ()=>{
        setNextItems(prev=>prev+3)
    }

  return (
    <section id="projects">
        <div className="container">
            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-5 sm:mb-0">
                    <h3 className="text-headingColor text-[2.3rem] font-[700]">
                        My Recent Projects
                    </h3>
                    <p className=' font-[550]'>These are some places I got my hands dirty:</p>
                </div>



            </div>

            <div className="flex items-center gap-4 flex-wrap mt-12">
                {portfolios?.slice(0,nextItems)?.map((project, index) => (
                    <div 
                    key={index}
                    data-aos='fade-zoom-in'
                    data-aos-delay='50'
                    data-aos-duration='1000'
                    className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
                    >
                        <figure>
                            <img className='rounded-[8px]' src={project.imgUrl} alt="" />
                        </figure>

                        <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                            <div className="w-full h-full flex items-center justify-center">
                            <button onClick={()=> showModelHandler(project.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                                See Details
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                <div className="text-center mt-6">
                    {
                        // Did to remove 'load more' button when all the data is already displayed
                        nextItems < portfolios.length && data.length>6 && (
                            <button onClick={loadMoreHandler} 
                            className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                                Load More
                            </button>
                        )}
                
                </div>
        </div>

        {showModel && <Model setShowModel={setShowModel} activeID={activeID} />}
    </section>

  )
}

export default Projects
