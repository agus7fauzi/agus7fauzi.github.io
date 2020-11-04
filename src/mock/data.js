import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agus Imam Fauzi | Junior Developer', // e.g: 'Name | Developer'
  lang: 'id', // e.g: en, es, fr, jp
  description: `Selamat datang di situs pribadi saya,
saya adalah Junior Developer yang sedang belajar skill programming
dan belajar menjadi pribadi yang cocok untuk seorang Developer.`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hai, Saya ',
  name: 'Agus Imam Fauzi',
  subtitle: 'Seorang Junior Developer.',
  cta: 'Cari tahu',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Saya seorang Full Stack Developer, yang bekerja Freelance full time.',
  paragraphTwo:
    'Skill yang saya kuasai adalah HTML, CSS, Javascript, PHP, Wordpress, NodeJS, MySQL, Adobe XD dan Adobe Photoshop.',
  paragraphThree:
    'Saya mampu membuat Blog Wordpress, Blog GatsbyJS, Personal Website, Company Profile dan Aplikasi-aplikasi Monolithic.',
  resume: 'Agus Imam Fauzi CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'donation-decision-project.jpg',
    title: 'Donation Decision',
    info: `Aplikasi Decision Donation adalah aplikasi untuk
    mengambil keputusan mengenai untuk siapakah dana Donasi
    akan disalurkan. aplikasi ini berfungsi untuk mengambil
    voting atau pendapat dari prespektif orang yang berbeda.`,
    info2: '',
    url: 'https://donation-decision.herokuapp.com/',
    repo: 'https://github.com/agus7fauzi/donation-decision', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Ingin menghubungi saya? Silahkan!',
  btn: 'Mari Ngobrol',
  email: 'agus7fauzi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/agus7fauzi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
