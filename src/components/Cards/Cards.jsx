import React from 'react'
import s from './Cards.module.scss'


const Cards = ({name, image,  photo="./stars.png", price }) => {
  return (
    <section className={s.might}>
        <div className="container">
        <div className={s.cardss}>
            <div className={s.cardd}>
                <img className={s.portf} src={image} alt="" />
                <h3>{name}</h3>
                
            <div className={s.star}>
                <img src={photo} alt="" />
                 <h5>4.0/5</h5>
            </div>
        <h2>{price}</h2>
    </div>
</div>
        </div>
</section>
  )
}

export default Cards