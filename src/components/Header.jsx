import Link from 'next/link';
import Nav from './Nav';
import { Button } from './ui/button';
import NavMobile from './NavMobile';

const Header = () => {
  return (
    <div className='py-8 xl:py-12 text-white static  top-0  '>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href={'/'}>
          <h1 className='text-4xl font-semibold        '>
            {' '}
            mohamed
            <span className='text-accent  px-2  '>Alaa</span>{' '}
          </h1>
        </Link>
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href={'/contact'}>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile NavBar  */}
        <div className=' xl:hidden    '>
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
