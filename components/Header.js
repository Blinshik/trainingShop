import React from 'react'
import styles from '../styles/Header.module.scss'
import Icon from '@material-ui/core/Icon';



export default function index() {
    return (
        <div>
             <div className={styles.sticky}>12333</div>
    <div className={styles.headermini}>
        <nav className={styles.sizingMargin}>
            <ul>
                <li>Каталог</li>
                <li>О компании</li>
                <li>Контакты</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Личный кабинет</li>
                <li>Блог</li>
                <li className={styles.NavHidden}>...</li>
            </ul>
            <div className={styles.wrapper}>
                <div className={styles.marginNumber}>Доставка с 8:00 до 23:00</div>
                <div className={styles.marginNumber}>+7(800) 800-80-80</div>
                <div className={styles.languages}>ES</div>
                <div className={styles.languages}>EN</div>
                <div>RU</div>
            </div>
        </nav>
    </div>
    <div className={styles.sizingPadding}>
        <div className={styles.wrapperLogo + ' ' + styles.sizingMargin}>
            <div className={styles.WrapperLogo__Left}>
                <img src="/markom_logo.svg" alt="Logo" className={styles.logo} />
                <button className={styles.btnCatalog}>Каталог</button>
                <div className={styles.SearchForm}>
                    <form action="">
                        <input type={styles.text} placeholder={styles.Поиск} className={styles.Search} />
                        <button className={styles.SearchBtn}>
                            <Icon>search</Icon>
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.WrapperLogo__right}>
                <div className={styles.headerIcons}>
                    <Icon>
                        person
                    </Icon>
                </div>
                <div className={styles.headerIcons}>
                    <Icon>
                        signal_cellular_alt
                    </Icon>
                    <div className={styles.headerIconsCounter}>0</div>
                </div>
                <div className={styles.headerIcons}>
                    <Icon>
                        shopping_cart
                    </Icon>
                    <div className={styles.headerIconsCounter}>0</div>
                </div>
                <div className={styles.cartPrice}>0 руб.</div>
            </div>
        </div>
    </div>
        </div>
    )
}
