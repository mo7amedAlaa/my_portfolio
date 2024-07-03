'use client';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
const Stats = () => {
  const stats = [
    { num: 6, text: 'years of experience' },
    { num: 26, text: 'project completed' },
    { num: 12, text: 'technologies mastered' },
    { num: 500, text: 'code commints' },
  ];
  return (
    <section className='p-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap  gap-6 max-w-[80vh] mx-auto xl:max-w-none  '>
          {stats.map((item, index) => {
            return (
              <div
                className='flex flex-1 items-center justify-center xl:justify-start gap-4'
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  dely={2}
                  className='text-4xl xl:text-6xl font-extrabold '
                />
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80  `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
