import React from 'react';
import "./about.css";
import AboutImg from "../../assets/photo2.jpg";
import CV from "../../assets/Meng_CV.pdf";
import Info from './Info';

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className="section__subtitle">Enthusiasm about new technologies</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="meng" className='about__img' />
            <div className='about__data'>
                <Info />
                <p className="about__description"> From tangible interaction interface, multimodal sensing and sense making, augmented reality to AI products, I am always exploring the edge of technologies and delivering innovative solutions.
                       With vision from AI research to data collection to prototype, I go beyond visually appealing, also want to create products which have high standard of usability, responsibility and explainability to human.    
                </p>
                <a download="" href={CV} className="button button--flex">Download Resume
                </a>
            </div>
        </div>
    </section>
  )
}

export default About