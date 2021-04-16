import React from 'react'
import styles from '../styles/HomePage.module.scss'
import Courusel from '../components/Courusel.js'
import Slider from '../components/Slider.js'
//import SliderItem1 from '../components/SliderItem1.js'

export default function HomePage() {
    return (
        
        <div>
            <Courusel />
            <Slider  />
    
     <div className={styles.sizingPadding}>
         <div className={styles.sizingMargin + ' ' + styles.lines} >
             <div className={styles.line}>
                 <div className={styles.firstLineItem}>
                     <img src="/tort.webp" alt="Tort" className={styles.firstLineItemImg} />
                     <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                 </div>
                 <div className={styles.firstLineItem}>
                    <img src="/tort.webp" alt="Tort" className={styles.firstLineItemImg} />
                    <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                </div>
             </div>
             <div className={styles.line}>
                    <div className={styles.secondLineItem}>
                        <img src="/tort.webp" alt="Tort" className={styles.secondLineItemImg} />
                        <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                    </div>           
                    <div className={styles.secondLineItem}>
                        <img src="/tort.webp" alt="Tort" className={styles.secondLineItemImg} />
                        <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                    </div>
                    <div className={styles.secondLineItem}>
                        <img src="/tort.webp" alt="Tort" className={styles.secondLineItemImg} />
                        <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                    </div> 
             </div>
         </div>
     </div>
     <div className={styles.sizingPadding}>
         <div className={styles.sizingMargin}>
             <div className={styles.orderInfoText}>
                <div className={styles.orderInfoTextImg}>
                    <div className={styles.headOrderText}>Десерты на заказ</div>
                    <div className={styles.orderText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde fuga numquam qui ipsam eaque minima nemo, eveniet ex mollitia vitae quo recusandae quis laboriosam voluptatibus quod vel, adipisci dolores.</div>
                    <button className={styles.moreInfoBtn}>Узнать подробнее</button>
                 </div>
             </div>
         </div>
     </div>
     <div className={styles.sizingPadding}>
        <div className={styles.sizingMargin + ' ' + styles.Brings}>
            <div className={styles.newBrings}>
                <div className={styles.newBringsText}>Вода, соки, напитки</div>
            </div>
            <div className={styles.newBringsSlider}>
                <div className={styles.newBringsSliderItem + ' ' + styles.newBringsSliderItemJuice}>
                        <img src="/large_Авокадо.webp" alt="Avocado" className={styles.newBringsSliderItemImg} />
                    <div className={styles.afterImg}>
                            <div className={styles.newBringsSliderItemInfoName}>Авокадо, 1 шт.</div>
                            <div className={styles.newBringsSliderItemInfoPrice}>
                                <div className={styles.newBringsSliderItemInfoPriceNew}>59 руб</div>
                                <button className={styles.newBringsSliderItemBtn}>В корзину</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.sizingPadding}>
        <div className={styles.sizingMargin + ' ' + styles.Brings}>
            <div className={styles.newBrings}>
                <div className={styles.newBringsText}>Орехи</div>
            </div>
            <div className={styles.newBringsSlider}>
                <div className={styles.newBringsSliderItem + ' ' + styles.newBringsSliderItemJuice}>
                        <img src="/large_Авокадо.webp" alt="Avocado" className={styles.newBringsSliderItemImg} />
                    <div className={styles.afterImg}>
                            <div className={styles.newBringsSliderItemInfoName}>Авокадо, 1 шт.</div>
                            <div className={styles.newBringsSliderItemInfoPrice}>
                                <div className={styles.newBringsSliderItemInfoPriceNew}>59 руб</div>
                                <button className={styles.newBringsSliderItemBtn}>В корзину</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.sizingPadding}>
        <div className={styles.sizingMargin + ' ' + styles.Brings}>
            <div className={styles.newBrings}>
                <div className={styles.newBringsText}>Наши плюсы</div>
            </div>
            <div className={styles.newBringsSlider}>
                <div className={styles.newBringsSliderItem + ' ' + styles.newBringsSliderItemJuice}>
                        <img src="/plus.svg" alt="Plus" className={styles.plusImg} />
                    <div className={styles.afterImg}>
                            <div className={styles.plusHead}></div>
                            <div className={styles.plusText}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        
    )
}
