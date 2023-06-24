import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaSass
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/bookipage.png';
import Work2 from './assets/ohmyfood.png';
import Work3 from './assets/GoMike.png';
import Work4 from './assets/Kanap.png';
import Work5 from './assets/HotTakes.png';
import Work6 from './assets/Groupomania.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Thayana',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Triacca',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '33 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Brazilian/Italian',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Liverpool',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+4407453953854',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'sweethay@hotmail.com',
  },

  {
    id: 8,
    title: 'Langages : ',
    description: 'Portuguese, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '6',
    title: 'Completed <br /> Projects',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2017 - PRESENT',
    title: 'Operation Supervisor <span> Amazon </span>',
    desc: 'Oversee and optimize the daily operations to ensure efficiency and productivity. I manage a team, coordinate workflows, and implement strategies to meet targets and enhance customer satisfaction. My role involves analyzing data, identifying areas for improvement, and implementing innovative solutions to drive operational excellence.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2016-2017',
    title: 'Hospitality <span> Arc Hospitality </span>',
    desc: 'I was specialized in providing exceptional service during bar events and formal dinners. With a strong focus on customer satisfaction, I seamlessly managed bar operations, ensured smooth service flow, and delivered personalized experiences to guests. My attention to detail and ability to create a welcoming atmosphere contributed to memorable and successful events.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2010 - 2015',
    title: 'Flight Attendant <span> Tam Airlines </span>',
    desc: 'As a former Flight Attendant, I had the privilege of ensuring a safe and comfortable travel experience for passengers. With a strong commitment to customer service, I provided exceptional hospitality, assisted with onboard procedures, and effectively communicated safety protocols. Through my friendly demeanor and problem-solving skills, I contributed to creating a positive and enjoyable journey for all passengers.',
  },


  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022-2023',
    title: 'Web Developer <span> OpenClassroom </span>',
    desc: 'This comprehensive curriculum provided me with in-depth knowledge and hands-on experience in web development. Throughout the program, I gained expertise in HTML, CSS, JavaScript, backend development, and other essential skills. With this certification, I am equipped to design and develop dynamic and responsive websites, ready to contribute to the ever-evolving field of web development.',
  },
];

export const skills = [
  {
    id: 1,
    icon: <FaHtml5 />,
    title: 'HTML',
  },

  {
    id: 2,
    icon: <FaJsSquare />,
    title: 'JavaScript',
  },

  {
    id: 3,
    icon: <FaCss3Alt />,
    title: 'CSS',
  },

  {
    id: 4,
    icon: <FaReact />,
    title: 'React',
  },

  {
    id: 5,
    icon: <FaNodeJs />,
    title: 'NodeJs',
  },

  {
    id: 6,
    icon: <FaSass />,
    title: 'Sass',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Booki',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaGithub />,
        title: 'Github : ',
        desc: <a className="portfolio__links" href='https://github.com/ThayTriacca/Booki'>Booki</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML and CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Oh My Food',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaGithub />,
        title: 'Github : ',
        desc: <a className="portfolio__links" href='https://github.com/ThayTriacca/OhMyFood'>OhMyFood</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML and Sass',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Go Mike',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website - Optimization',
      },
      {
        icon: <FaGithub />,
        title: 'Github : ',
        desc: <a className="portfolio__links" href='https://github.com/ThayTriacca/GoMike-Designs'>GoMike Designs</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML and CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Kanap',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaGithub />,
        title: 'Github : ',
        desc: <a className="portfolio__links" href='https://github.com/ThayTriacca/Kanap'>Kanap</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Hot Takes',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaGithub />,
        title: 'Github : ',
        desc: <a className="portfolio__links" href='https://github.com/ThayTriacca/Hot-Takes'>Hot-Takes</a>,
      },
      {
        title: 'Language : ',
        desc: 'Node.JS, Express and MongoDB',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Groupomania',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaGithub />,
        title: 'Github : ',
        desc: <a className="portfolio__links" href='https://github.com/ThayTriacca/Groupomania'>Groupomania</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
