import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import {
  headData,
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data.en';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <App
        heroData={heroData}
        aboutData={aboutData}
        projectsData={projectsData}
        contactData={contactData}
        footerData={footerData}
      />
    </>
  );
};
