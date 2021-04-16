import React from 'react'
import styles from '../styles/SliderItem1.module.scss'

export default function SliderItem1() {
    return (
        <div className={styles.newBringsSlider}>
            <div className={styles.newBringsSliderItem}>
                    <img src="/large_Авокадо.webp" alt="Avocado" className={styles.newBringsSliderItemImg} />
                <div className={styles.newBringsSliderItemSale}>-20%</div>
                <div className={styles.afterImg}>
                        <div className={styles.newBringsSliderItemInfoName}>Авокадо, 1 шт.</div>
                        <div className={styles.newBringsSliderItemInfoPrice}>
                            <div className={styles.newBringsSliderItemInfoPriceOld}>135 руб</div>
                            <div className={styles.newBringsSliderItemInfoPriceNew}>59 руб</div>
                            <button className={styles.newBringsSliderItemBtn}>В корзину</button>
                        </div>
                </div>
            </div>
        </div>
    )
}





