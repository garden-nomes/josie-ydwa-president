import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Parallax from '../components/Parallax';
import Header from '../components/Header';
import Nav from '../components/Nav';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Josie Ellison for YDWA President"
      meta={[
        { name: 'description', content: 'Josie Ellison for YDWA president.' },
        {
          name: 'keywords',
          content:
            'young democrats, washington, wa, josie, ellison, josie ellison, ydwa president'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        }
      ]}
      link={[
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Signika:300,400,600,700'
        },
        {
          rel: 'stylesheet',
          href:
            'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        }
      ]}
    >
      <html lang="en" />
    </Helmet>

    <Parallax />

    <Header />
    <article role="main">
      <Nav />

      {children()}

      <ul className="social-media-icons" />
    </article>

    <div className="foot">
      <span>copyright &copy; 2017 Josie Ellison</span>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
