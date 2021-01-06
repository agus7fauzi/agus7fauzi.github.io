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
  paragraphThree: `Selain basic di atas, saya juga bisa menggunakan Library dan Framework, seperti
  CodeIgniter, ExpressJS, Bootstrap, ReactJS dan Material UI. Dan kadang saya menggunakan
  ORM Sequelize untuk aplikasi NodeJS saya`,
  resume: 'Daftar Riwayat Hidup Agus Imam Fauzi.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'point-of-sales-project.png',
    title: 'Aplikasi Point of Sales',
    info: `Aplikasi POS biasa juga disebut dengan aplikasi kasir adalah aplikasi atau software yang digunakan
    untuk mendukung transaksi langsung dengan penjual di berbagai toko retail yang memiliki banyak cabang.`,
    info2: `Aplikasi ini saya buat dengan Teknologi, Library dan Framework ReactJS, Material UI, NodeJS, ExpressJS, GraphQL Language,
    Apollo , MySQL, ORM Sequelize.`,
    info3: 'Aplikasi Ini masih dalam tahap pengembangan!',
    url: 'https://posix-pos.web.app',
    repo: '', // if no repo, the button will not show up
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
