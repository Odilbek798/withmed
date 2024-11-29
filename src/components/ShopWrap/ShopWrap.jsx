import React from 'react'
import s from './ShopWrap.module.scss'
import Cards from '../Cards/Cards'

const ShopWrap = ( {text, image}) => {
  return (<>
    <section className={s.shopwrap}>
       <div className="container">

            <div className={s.wrap}>
                <div className={s.card}>
                    <h2>Casual</h2>
                </div>
                <div className={s.card}>
                    <h2>Formal</h2>
                </div>
                <div className={s.card}>
                    <h2>Party</h2>
                </div>
                <div className={s.card}>
                    <h2>Gym</h2>
                </div>
            </div>
       </div>
    </section>
    <section className={s.otz}>
        <div className={s.title_top}>
            <h2>All Reviews <span>(451)</span></h2>
            <div className={s.buttons}>
                <button className={s.btn1}><img src="/Vector (20).png" alt="" /></button>
                <button className={s.btn2}>Latest <img src="/mini.png" alt="" /></button>
                <button className={s.btn3}>Write a Review</button>
            </div>
        </div>
    <div className={s.otzivs}>
                <div className={s.otziv}>
                <div className={s.profile}>
                <img className={s.star} src="./stars.png" alt="" />
                    <h3>Sarah M<img src="./galochka.png" alt="" /></h3>
                    
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                         From casual wear to elegant dresses,
                     every piece I've bought has exceeded my expectations.”</p>
                     <p className={s.posted}>Posted on August 14, 2023</p>
                    </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                        <img className={s.star} src="./stars.png" alt="" />
                        <h3>James L<img src="./galochka.png" alt="" /></h3>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                             From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>  
                        <p className={s.posted}>Posteed on August 14, 2023</p> 
                        </div>
                    </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                        <img className={s.star} src="./stars.png" alt="" />
                        <h3>James L<img src="./galochka.png" alt="" /></h3>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                             From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>  
                        <p className={s.posted}>Posteed on August 14, 2023</p> 
                        </div>
                    </div>
                         </div>
                
                <div className={s.otziv}>
                <div className={s.profile}>
                <img className={s.star} src="./stars.png" alt="" />
                    <h3>Sarah M<img src="./galochka.png" alt="" /></h3>
                    
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. 
                        From casual wear to elegant dresses,
                     every piece I've bought has exceeded my expectations.”</p>
                     <p className={s.posted}>Posted on August 14, 2023</p>
                    </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                        <img className={s.star} src="./stars.png" alt="" />
                        <h3>James L<img src="./galochka.png" alt="" /></h3>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                             From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>  
                        <p className={s.posted}>Posted on August 14, 2023</p> 
                    </div>
                         </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                <img className={s.star} src="./stars.png" alt="" />
                    <h3>Sarah <img src="./galochka.png" alt="" /></h3>
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                         From casual wear to elegant dresses,
                     every piece I've bought has exceeded my expectations.”</p>
                     <p className={s.posted}>Posted on August 14, 2023</p>

                    </div>
                    </div>
                </div>
                </div>
                <div className={s.btns}>
                    <button>Load More Reviews</button>
                </div>
            </section>
                <h1 className={s.h1}>You might also like</h1>
            <div className={s.props}>
                <Cards name="Polo with Contrast Trims" image="./blue.png" price="$212"/>
                <Cards name="Gradient Graphic T-shirt" image="./rainb.png" price="$145"/>
                <Cards name="Polo with Tipping Details" image="./brown.png" price="$180" />
                <Cards name="Black Striped T-shirt" image="./zebra.png" price="$120" />
            </div>
       

  </>
  )
}

export default ShopWrap