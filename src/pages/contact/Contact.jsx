import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j0mfrs4', 'template_v2mqism', form.current, 'tV1QCTBjjjwa14FLs')
    e.target.reset()
  };

  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy !</h3>

          <p className='contact__description'>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>sweethay@hotmail.com</h4>
              </div>
            </div>

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>+44 07453953854</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com/sweethay" className="contact__social-link">
              <FaFacebookF />
            </a>

            <a href="https://github.com/ThayTriacca" className="contact__social-link">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/thayana-yasmin-triacca-bb36b1125/" className="contact__social-link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='text'
                name='subject'
                placeholder='Your Subject'
                className='form__control'
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea
              name='message'
              placeholder='Your Message'
              className='form__control textarea'
            ></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
