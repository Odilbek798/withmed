import React from 'react'
import s from './ProductWrap.module.scss'
import Cards from '../Cards/Cards'

const ProductWrap = ({product}) => {
   
  return (
    <>
    <section className={s.productwrap}>
        <div className="container">
            <div className={s.wrap}>
                <div className={s.images}>
                <img className={s.gl} src={product.image} alt="" />

                    <div>
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <img className={s.gr} src={product.image} alt="" />

                </div>
                <div className={s.box}>
                    <div>
                        <h2>{product.name}</h2>
                        <h3>⭐⭐⭐⭐ 4/5</h3>
                        <div className={s.price} >
                            <b>{product.price} sum</b>
                            <s>{product.price * 1.1} sum</s>
                        </div>
                        <p>This graphic t-shirt which is perfect for any occasion.
                         Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    </div>

                    <div>
                        <p>Select Colors</p>
                        <div className={s.colors}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div>
                        <p>Choose Size</p>
                        <div className={s.btns}>
                            <button>Small</button>
                            <button>Medium</button>
                            <button>Large</button>
                            <button>X-Large</button>
                        </div>

                    </div>
                        <div className={s.add_card}>
                            <button className={s.mini}>- 1 +</button>
                            <button className={s.huge}>Add to Cart</button>
                        </div>
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
        <div className={s.del}>
                <div className={s.otziv}>
                <div className={s.profile}>
                    <p>⭐⭐⭐⭐⭐</p>
                    <h3>Sarah M<img src="/galochka.png" alt="" /></h3>
                    
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                         From casual wear to elegant dresses,
                     every piece I've bought has exceeded my expectations.”</p>
                     <p className={s.posted}>Posted on August 14, 2023</p>
                    </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                    <p>⭐⭐⭐⭐⭐</p>
                        <h3>James L<img src="/galochka.png" alt="" /></h3>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                             From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>  
                        <p className={s.posted}>Posteed on August 14, 2023</p> 
                        </div>
                    </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                    <p>⭐⭐⭐⭐⭐</p>
                        <h3>James L<img src="/galochka.png" alt="" /></h3>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                             From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>  
                        <p className={s.posted}>Posteed on August 14, 2023</p> 
                        </div>
                    </div>
                         </div>
                         </div>
                
                <div className={s.otziv}>
                <div className={s.profile}>
                <p>⭐⭐⭐⭐⭐</p>
                    <h3>Sarah M<img src="/galochka.png" alt="" /></h3>
                    
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. 
                        From casual wear to elegant dresses,
                     every piece I've bought has exceeded my expectations.”</p>
                     <p className={s.posted}>Posted on August 14, 2023</p>
                    </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                    <p>⭐⭐⭐⭐⭐</p>
                        <h3>James L<img src="/galochka.png" alt="" /></h3>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                             From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>  
                        <p className={s.posted}>Posted on August 14, 2023</p> 
                    </div>
                         </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                <p>⭐⭐⭐⭐⭐</p>
                    <h3>Sarah <img src="/galochka.png" alt="" /></h3>
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
                <Cards name="Polo with Contrast Trims" image="/blue.png" price="$212"/>
                <Cards name="Gradient Graphic T-shirt" image="/rainb.png" price="$145"/>
                <Cards name="Polo with Tipping Details" image="/brown.png" price="$180" />
                <Cards name="Black Striped T-shirt" image="/zebra.png" price="$120" />
            </div>
            <section className={s.stay}>
        <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div className={s.email}>
            <input type="email" placeholder='Enter your email address' />
            <button>Subscribe to Newsletter</button>
        </div>
    </section>
    <section className={s.footer}>
        <div className="container">
            <div className={s.all}>

            <div className={s.shop}>
                <img src="/SHOP.CO (1).png" alt=""/>
                <p>We have clothes that suits your style and which you're
                 proud to wear. From women to men.</p>
                 <img src="/social.png" alt="" />  
            </div>
            <div className={s.text}>
                <div className={s.first }>
                <div className="company">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div className="company">
                    <h4>Help</h4>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                </div>
                <div className={s.second}>

                <div className="company">
                    <h4>FAQ</h4>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div className="company">
                    <h4>Resources</h4>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>

                    </div>  
                
            </div>
            </div>

            <div className={s.line}>
                <img src="/Line 8.png" alt="" />
            </div>

            <div className={s.last}>
                <div className={s.bom}>
                    <div className={s.textbek}>
                        <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    </div>
                    <div className={s.imgbek}>
                    <img src="/Frame 53.png" alt="" />
                    </div>
                </div>
            
            </div>
        </div>
   </section>
    </>
  )
}

export default ProductWrap