import React from 'react';

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className="about__box">
        <i class = "bx bx-award"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">9 Years of Experience</span>
        </div>

        <div className="about__box">
        <i class='bx bx-book-open'></i>
            <h3 className="about__title">Published</h3>
            <span className="about__subtitle">30+ Papers and Patents</span>
        </div>

        <div className="about__box">
        <i class='bx bx-box'></i>
            <h3 className="about__title">T-shape</h3>
            <span className="about__subtitle">Work across Research, Design and Prototype</span>
        </div>

    </div>
  )
}

export default Info