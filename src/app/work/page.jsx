'use client';

import { animate, motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '../../components/WorkSliderBtns';
const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project-1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'project-2',
    description:
      'Master programming in front end fields through professional programming courses to obtain excellent income and career opportunities around the world. ',
    stack: [
      { name: 'HTML' },
      { name: 'CSS, BootStrap' },
      { name: 'JavaScript' },
    ],
    image: '/assets/work/thumb9.png',
    live: 'https://mo7amedalaa.github.io/Programing-learn/',
    github: 'https://github.com/mo7amedAlaa/Programing-learn/',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'project-3',
    description: 'Welcome to FlavorVerse,Your passport to culinary adventures!',
    stack: [
      { name: 'React js' },
      { name: 'talwaind css' },
      { name: 'redux toolkit' },
    ],
    image: '/assets/work/thumb5.png',
    live: 'https://flavorverse-eight.vercel.app/',
    github: 'https://github.com/mo7amedAlaa/flavorverse',
  },
  {
    num: '04',
    category: 'frontend',
    title: 'project-4',
    description: '  online Store like Amazone',
    stack: [
      { name: 'React js' },
      { name: 'Redux toolKit' },
      { name: 'Firebase' },
    ],
    image: '/assets/work/thumb7.png',
    live: 'https://database-63cce.web.app/',
    github: 'https://github.com/mo7amedAlaa/AmazonClone',
  },
  {
    num: '05',
    category: 'FullStack',
    title: 'project-5',
    description:
      'All the student needs from one portal: course registration, payment of fees, platform, study schedules, exam schedules, results.',
    stack: [
      { name: 'React js' },
      { name: 'firebase' },
      { name: 'Redux toolkit' },
      { name: 'PHP ' },
      { name: 'laravel ' },
      { name: 'My SQL ' },
    ],
    image: '/assets/work/thumb6.png',
    live: 'https://graduation-project-608ae.web.app/',
    github: 'Postgraduate-studies-website-of-Benha-University',
  },
  {
    num: '06',
    category: 'frontend',
    title: 'project-6',
    description: 'My portfolio website',
    stack: [
      { name: 'Next js' },
      { name: 'framer-motion' },
      { name: 'talwaind css' },
    ],
    image: '/assets/work/thumb4.png',
    live: 'https://my-portfolio-ockk.vercel.app/',
    github: 'https://github.com/mo7amedAlaa/my_portfolio',
  },
  {
    num: '07',
    category: 'frontend',
    title: 'project-6',
    description:
      'DentalClinic Can Help You Get The Smile You have Always Wanted. We Offer Cosmetic Dentistry, Root Canal Therapy, Cavity Inspections, And More.  ',
    stack: [
      { name: 'Html ' },
      { name: 'CSS' },
      { name: 'SCSS' },
      { name: 'PHP' },
      { name: 'Blade' },
      { name: 'Blade' },
    ],
    image: '/assets/work/thumb8.png',
    live: 'https://mo7amedalaa.github.io/-DentalClinic-Website/',
    github: 'https://github.com/mo7amedAlaa/-DentalClinic-Website',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='flex min-h-[80vh] flex-col  justify-center  py-12  xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]  max-w-full '>
          <div className='w-full xl:w-[50%] xl:h-[440px] flex flex-col xl:justify-between order-2 xl:order-none '>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline     '>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-accent'>
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ', '}
                  </li>
                ))}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex item-center gap-4'>
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-cover'
                          alt='xc'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
