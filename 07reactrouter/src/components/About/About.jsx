import React from 'react'

const About = () => {
  return (
    <div className='py-6 bg-white'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6 '>
        <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
          <div className='md:5/12 lg:w-5/12'>
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" />
          </div>
          <div className='md:w-7/12 lg:w-6/12'>
            <h2 className='text-2xl text-gray-900 font-bold md:text-4xl'>
              React develeopment us carried out by passionate developers
            </h2>
              <p className='mt-6 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro natus veritatis harum voluptates suscipit asperiores provident expedita voluptatem eos, numquam ex cupiditate ratione corporis fugiat eaque quae corrupti! Provident, quod!
              </p>
              <p className='mt-4 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam, voluptas a enim reiciendis natus sapiente, animi repudiandae deserunt harum eum delectus maiores ipsa illo ratione adipisci! Incidunt, minima consectetur.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About