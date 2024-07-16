import React from 'react'
import "./work.css"

const WorksItems = ({item}) => {
  return (
    <div className="work__container container grid">
      <div className="work__card" key={item.id}>
        <div className='work_text'>
          <a href={item.link}><img src={item.image} alt='project cover' className='work__img' />
          </a>

          <div>
            <h3 className="work__title">{item.title}</h3>
            <p className="work__introduction">{item.introduction}</p>
            <a href={item.link} className="work__button">
              More <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default WorksItems