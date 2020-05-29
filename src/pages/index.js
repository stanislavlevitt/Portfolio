import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Experience from '../sections/WorkExperience';
import Education from '../sections/Education';
import Skills from '../sections/Skills';
import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Experience />
    <Education />
    <Skills />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
