import React from 'react'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <div>
        <div className={styles.sizingPadding + ' ' + styles.bgcFooter}>
        <div className={styles.sizingMargin}>
            <div className={styles.footer}>
                <div className={styles.footer__up}>
                    <div className={styles.footer__up__left}>
                        <div className={styles.footer__up__leftItem}>
                            <div className={styles.footer__up__left__title}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                        </div>
                        <div className={styles.footer__up__leftItem}>
                            <div className={styles.footer__up__left__title}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                        </div>
                        <div className={styles.footer__up__leftItem}>
                            <div className={styles.footer__up__left__title}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                        </div>
                    </div>
                    <div className={styles.footer__up__web}>
                        <div className={styles.footer__up__left__titleUp}>Мы в соц. сетях</div>
                        <div className={styles.footer__imgsUp}></div>
                        <div className={styles.footer__up__contacts}>
                            <div className={styles.footer__up__contacts__numbers}>
                                <div className={styles.footer__up__contacts__numbers__big}>+7(800) 800-80-80</div>
                                <div className={styles.footer__up__contacts__numbers__cmall}>справочная служба</div>
                            </div>
                            <div className={styles.footer__up__contacts__numbers}>
                                <div className={styles.footer__up__contacts__numbers__big}>+7(800) 800-80-80</div>
                                <div className={styles.footer__up__contacts__numbers__cmall}>справочная служба</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.footer__down}>
                    <img className={styles.footer__down__img} src={'/markom_logo.svg'}></img>
                    <div className={styles.footer__imgsDown}></div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.sizingPadding}>
        <div className={styles.sizingMargin}>
            <div className={styles.foot}>
                <p className={styles.foot__left}>© 2020 Любое использование контента без письменного разрешения запрещено</p>
                <div className={styles.foot__left}>Интернет-магазин создан на InSales</div>
            </div>
        </div>
    </div>
    </div>
    )
}
