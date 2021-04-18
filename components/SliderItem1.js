import React from 'react'
import styles from '../styles/SliderItem1.module.scss'
import Icon from '@material-ui/core/Icon';

export default function SliderItem1() {
    return (
        <div className={styles.newBringsSlider}>
            <div className={styles.newBringsSlider__item}>
                    <img src="/large_Авокадо.webp" alt="Avocado" className={styles.newBringsSlider__item__Img} />
                <div className={styles.newBringsSlider__item__sale}>-20%</div>
                <div className={styles.newBringsSlider__item__afterImg}>
                        <div className={styles.newBringsSlider__item__afterImg__name}>Авокадо, 1 шт.</div>
                        <div>
                            <div className={styles.newBringsSlider__item__afterImg__priceOld}>135 руб</div>
                            <div className={styles.newBringsSlider__item__afterImg__priceNew}>59 руб</div>
                            <button className={styles.newBringsSlider__item__afterImg__priceBtn}>
                                В корзину
                                <Icon>
                                    shopping_cart
                                </Icon>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}





