'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Nav = () => {
  const links = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'service',
      path: '/service',
    },
    {
      name: 'resume',
      path: '/resume',
    },
    {
      name: 'work',
      path: '/work',
    },
    {
      name: 'contact',
      path: '/contact',
    },
  ];
  const pathName = usePathname();
  return (
    <div className='flex gap-5 items-center justify-between '>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathName && 'text-accent border-b-2 border-accent '
          } capitalize font-medium  hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
