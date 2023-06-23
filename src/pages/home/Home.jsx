import React from 'react';
import Profile from '../../assets/profilepicture.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Thayana Triacca.</span> Front-end Web Developer
          </h1>

          <p className='home__description'>
          I am transitioning from an operations supervisor to a front-end developer. 
          Based in Liverpool, UK, I have a background in managing operations and a growing passion for web development. 
          My main focus is improving my skills as a front-end developer, utilizing my experience to create user-friendly designs. 
          With a diverse cultural background and a drive for continuous learning, I am ready to embark on new challenges and make a meaningful impact in the industry.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
