'use client';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
const NavMobile = () => {
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
    <div>
      <Sheet className='flex items-center justify-center'>
        <SheetTrigger>
          <CiMenuFries className='text-[32px]  text-accent' />
        </SheetTrigger>

        <SheetContent>
          <div className='logo mt-32 mb-40 text-center text-4xl capitalize '>
            <Link href={'/'}>
              {' '}
              <h1 className='font-semibold text-4xl  '>
                mohamed
                <span className='text-accent px-2'>Alaa</span>
              </h1>
            </Link>
          </div>
          <nav className='flex flex-col gap-8 items-center justify-center '>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathName &&
                  'text-accent border-b-2 border-accent '
                } text-xl capitalize hover:text-accent  transition-all`}
              >
                <SheetClose>{link.name}</SheetClose>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
