import React from 'react'

const SectionComponent = (props) => {
  return (
    <section className='relative pb-12 md:pb-24' id={props.id}>
      <div className="sm:hidden md:hidden lg:block absolute left-[7.91667rem] top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9.16667rem] font-semibold lowercase pointer-events-none w-max h-max">
        <span className="block transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap relative left-1/2 top-1/2 tracking-[0.1rem] text-gray-500/10">
          {props.verticleTiltle}
        </span>
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-around w-full max-w-screen-lg px-6'>
          <header className='font-montserrat font-bold text-4xl md:text-6xl text-heading-attention-0'>
            <h2 className='fade-in transition-all ease-out duration-1000'>
              <span className='block text-base text-secondary font-cursive select-none' aria-hidden='true'>&lt;h2&gt;</span>
              {props.heading}
              <span className='block text-base text-secondary font-cursive select-none' aria-hidden='true'>&lt;h2&gt;</span>
            </h2>
          </header>
          <div className='fade-in transition-all ease-out duration-1000 delay-500'>
            {props.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionComponent