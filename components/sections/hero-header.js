import Link from 'next/link';
import React from 'react'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';

const HeroHeader = () => {
  return (
    <header className='min-h-screen bg-bg-color-1' id='home'>
      <div className='h-screen flex justify-center items-center magicpattern'>
        <div className='flex flex-col justify-around w-full px-6 max-w-screen-lg'>
          <div className='text-white font-montserrat font-bold mx-0 my-6'>
            <h1 className='text-4xl md:text-6xl relative pt-12'>
              <span className='block text-base text-secondary font-cursive select-none' aria-hidden='true'>&lt;h1&gt;</span>
              Hi,
              <br />
              <span className='flex items-baseline'>
                I&apos;m
                <img
                  src={'/icon.svg'}
                  className='h-10 w-10 md:h-16 md:w-16 align-bottom inline-block mr-[-0.6rem]'
                  alt='Y'
                />
                ugabdh,
              </span>
              Software Engineer
              <span className='block text-base text-secondary font-cursive select-none' aria-hidden='true'>&lt;/h1&gt;</span>
            </h1>
          </div>
          <div className='text-secondary text-base mb-6'>
            <p className='relative mt-0 text-gray-400'>
              <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;p&gt;</span>
              Full-stack Developer, Data Science Enthusiast
              <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;/p&gt;</span>
            </p>
          </div>
          <div>
            <p>
              Contact Me
            </p>
          </div>
          <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;a&gt;</span>
          <div className='flex'>
            <Link
              className='text-2xl md:text-3xl pr-4 cursor-pointer text-heading-attention-0 hover:text-heading-attention-1 transition duration-300 ease-in'
              title='LinkedIn Profile'
              href='https://www.linkedin.com/in/yugabdh-pashte/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <BsLinkedin />
            </Link>
            <Link
              className='text-2xl md:text-3xl pr-4 cursor-pointer text-heading-attention-0 hover:text-heading-attention-1 transition duration-300 ease-in'
              title='Twitter Profile'
              href='https://twitter.com/yugabdh'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <BsTwitterX />
            </Link>
            <Link
              className='text-2xl md:text-3xl pr-4 cursor-pointer text-heading-attention-0 hover:text-heading-attention-1 transition duration-300 ease-in'
              title='Github Profile'
              href='https://github.com/Yugabdh'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <BsGithub />
            </Link>
          </div>
          <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;/a&gt;</span>
        </div>
      </div>
    </header>
  )
}

export default HeroHeader;