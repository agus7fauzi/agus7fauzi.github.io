import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agus Imam Fauzi | Programmer',
  lang: 'id',
  description: `Selamat datang di situs portofolio saya,
  saya adalah seorang Programmer.`,
};

// HERO DATA
export const heroData = {
  title: 'Hai, Saya ',
  name: 'Agus Imam Fauzi',
  subtitle: 'Seorang Programmer.',
  cta: 'Cari tahu',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Saya adalah seorang Programmer.',
  paragraphTwo: 'Skill yang saya kuasai adalah HTML, CSS, Javascript, PHP, NodeJS dan MySQL.',
  paragraphThree: `Selain basic di atas, saya juga terbiasa menggunakan Library dan Framework, seperti
  CodeIgniter, ExpressJS, Bootstrap, ReactJS dan Material UI. Dan kadang saya menggunakan
  ORM Sequelize untuk aplikasi NodeJS saya`,
  resume: 'Daftar Riwayat Hidup Agus Imam Fauzi.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'donation-decision-project.jpg',
    title: 'Aplikasi Point of Sales',
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
      name: 'github',
      url: 'https://github.com/agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/agus7fauzi',
    },
  ],
};
