'use client';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import { SiBootstrap, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
// abou me
const about = {
  title: 'About Me',
  description: `I am a web developer with 6 years of experience, who graduated from the Faculty of Computers and Artificial Intelligence at Benha University. With a solid foundation in computer science and artificial intelligence, I have a strong passion for building dynamic and responsive web applications. My skills include HTML, CSS, JavaScript, and various modern frameworks such as React and Angular. I am also experienced in backend development using Node.js and have a good understanding of databases like MongoDB and SQL.In addition to technical skills, I am a quick learner and enjoy tackling new challenges. I am always eager to learn about the latest technologies and best practices in web development. Whether working independently or as part of a team, I strive to deliver high-quality work and contribute positively to any project I am involved in.`,
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Mohamed Alaa',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+20 1038263431',
    },
    {
      fieldName: 'Experience',
      fieldValue: '6 years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Egyptian',
    },

    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Language',
      fieldValue: 'Arabic, English and German',
    },
    {
      fieldName: 'Email',
      fieldValue: 'mohamed3laa3467@gmail.com',
    },
  ],
};
// experience
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'I have accumulated valuable experience working in various roles and projects, contributing to my growth as a web developer.',
  items: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Afree ',
      position: 'Junior Developer',
      duration: '2023 - 2024',
    },
    {
      company: 'MEC Tech',
      position: 'Junior Developer',
      duration: '2023 - Present',
    },
    {
      company: 'Web Dev Co.',
      position: 'Front-End Developer',
      duration: '2019 - 2022',
    },

    {
      company: 'Dr.Code',
      position: 'FrontEnd Developer',
      duration: '2019 - 2020',
    },
    {
      company: 'Freelance',
      position: 'FrontEnd Developer',
      duration: '2017 - 2019',
    },
  ],
};
// Education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'A brief overview of my educational background and the courses I have completed.',
  items: [
    {
      institution: 'MEC',
      degree: 'BackEnd Web Development ',
      duration: 'present',
    },
    {
      institution: 'MEC',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2023',
    },
    {
      institution: 'Codecademy',
      degree: 'Front-end Track',
      duration: '2022',
    },
    {
      institution: 'Benha University',
      degree: 'Computer Science 50 (CS50)',
      duration: '2021',
    },
    {
      institution: 'Udacity',
      degree: 'React , Next js',
      duration: '2020',
    },
    {
      institution: 'Benha University',
      degree: 'DataStructure ',
      duration: '2020-2024',
    },
    {
      institution: 'Self Study',
      degree: 'Problem Solving',
      duration: '2020-present',
    },
  ],
};
// Skills data
const skills = {
  title: 'My Skills',
  description: 'A list of technical skills and tools I am proficient in.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React JS',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next ',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind css',
    },
    {
      icon: <SiBootstrap />,
      name: 'Bootstrap',
    },
    {
      icon: <FaDatabase />,
      name: 'SQL',
    },
    {
      icon: <FaGitAlt />,
      name: 'Git',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { delayDuration, motion } from 'framer-motion';
import { ScrollArea } from '../../components/ui/scroll-area';
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0  '
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 '>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full '>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px]  text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3 '>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 '>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px]  text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3 '>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 '>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value='about' className='w-full'>
              <div className='flex flex-col gap-[30px] '>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify    '>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1   xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0   text-wrap '>
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className='flex items-center justify-center xl:justify-start gap-4'
                    >
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
