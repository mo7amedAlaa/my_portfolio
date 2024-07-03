import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';
const Socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/mo7amedAlaa',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/mohamed-alaa-81923423a',
  },
  {
    icon: <FaTwitter />,
    path: 'https://x.com/mo7amed3laa__',
  },
  {
    icon: <FaFacebook />,
    path: 'https://www.facebook.com/profile.php?id=100051765841605&mibextid=ZbWKwL',
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
