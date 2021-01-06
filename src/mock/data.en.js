import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agus Imam Fauzi | Programmer',
  lang: 'en',
  description: `Welcome to my portfolio website,
  i am a Programmer.`,
};

// HERO DATA
export const heroData = {
  title: 'Hai, my name is ',
  name: 'Agus Imam Fauzi',
  subtitle: "I'm the Programmer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Programmer, working freelance full time.',
  paragraphTwo: 'The skills I master are HTML, CSS, Javascript, PHP, NodeJS and MySQL.',
  paragraphThree:
    'I am able to create Dasboard Full Fitur, Invoice System App, Gallery and others, Wesites likes Personal Website, Company Profile Website and others.',
  resume: 'Agus Imam Fauzi Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'donation-decision-project.jpg',
    title: 'Donation Decision',
    info: `The Decision Donation application is an application for
    make decisions about who the Donation funds are for
    will be funneled. this application serves to take
    voting or opinions from different people's perspectives.`,
    info2: '',
    url: 'https://donation-decision.herokuapp.com/',
    repo: 'https://github.com/agus7fauzi/donation-decision', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
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
