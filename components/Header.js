import {React, useState} from 'react'
import styles from '../styles/Header.module.scss'
import Icon from '@material-ui/core/Icon';
import Link from 'next/link'
import {connect} from 'react-redux'



function Header({array}) {
    const [isOpen, setIsOpen] = useState(true)

    const[style, styleChange] = useState({
        visibility: 'hidden',
        transform: 'translate3d(-100%, 0, 0)',
    })

    const [fallsCheck, permFalls] = useState(false)
    const [xCoord, permXCoord] = useState(0)

    const burgerHandler = () => {
        if(style.visibility === 'hidden') {
            styleChange({
                transform: 'translate3d(0, 0, 0)',
                visibility: 'visible',
            })
        } else {
            styleChange({
                visibility: 'hidden',
                transform: 'translate3d(-100%, 0, 0)',
            })
        }
    }

    let totalCost = 0
    array.forEach((el) => {
        totalCost = totalCost + (el.counter + 1)*el.item.price
    });

    let totalCounter = 0
    array.forEach((el) => {
        totalCounter = totalCounter + el.counter +1
    });

    const fallsHandler = (e) => {
        permFalls(!fallsCheck)
        permXCoord(e.clientX)
    }

    const openHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
    <div>
        <div 
            className={styles.sticky}
            style={{ top: isOpen ? "0" : "-42px" }}
        >
            Здесь может быть ваша реклама
            <div 
                className={styles.sticky__btn}
                style={{ top: isOpen ? "42px" : "0" }}
                onClick={openHandler}
            >
                <Icon
                    style={{ 
                        transform: isOpen ? "rotate(0)" : "rotate(180deg)",
                        transition: '.5s'
                    }}
                >
                    expand_more
                </Icon>
            </div>
        </div>
        <div 
            style={{ marginTop: isOpen ? "42px" : "0" }}
            className={styles.marginTop}
        ></div>
    <div 
        className={styles.headermini}
        style={style}
    >
        <nav className={styles.sizingMargin}>
            <ul>
                <li>Каталог</li>
                <li className={styles.about}>О компании</li>
                <li className={styles.contacts}>Контакты</li>
                <li className={styles.comes}>Доставка</li>
                <li className={styles.pay}>Оплата</li>
                <li className={styles.lk}>Личный кабинет</li>
                <li className={styles.blog}>Блог</li>
                <li 
                    className={styles.NavHidden}
                    onClick={fallsHandler}
                >
                    <Icon>
                        more_horiz
                    </Icon>   
                </li>
                <li 
                    className={styles.falls}
                    style={{
                        display: fallsCheck ? 'block' : 'none',
                        left: `${xCoord}px`
                    }}
                >
                    <div className={styles.falls__about}>О компании</div>
                    <div className={styles.falls__contacts}>Контакты</div>
                    <div className={styles.falls__comes}>Доставка</div>
                    <div className={styles.falls__pay}>Оплата</div>
                    <div className={styles.falls__lk}>Личный кабинет</div>
                    <div className={styles.falls__blog}>Блог</div>
                </li>
            </ul>
            <div className={styles.wrapper}>
                <div className={styles.marginNumber}>Доставка с 8:00 до 23:00</div>
                <div className={styles.marginNumber}>+7(800) 800-80-80</div>
                <div className={styles.languages}>RU</div>
                <div className={styles.languages}>EN</div>
                <div>ES</div>
            </div>
        </nav>
    </div>
    <div 
        className={styles.sizingPadding}
    >
        <div className={styles.wrapperLogo + ' ' + styles.sizingMargin}>
        <button 
            className={styles.btnLogo}
            onClick={burgerHandler}
        >
            <span className="material-icons-outlined">
                menu
            </span>
        </button>
                <Link href={'/'}>
                    <a className={styles.wrapperLogo__a}>
                        <img src="/markom_logo.svg" alt="Logo" className={styles.wrapperLogo__a__logo} />
                    </a>
                </Link>
                
                <button className={styles.btnCatalog}>
                    <Icon>menu</Icon>
                    Каталог
                </button>
                <div className={styles.SearchForm}>
                    <form action="">
                        <input type={'text'} placeholder={'Поиск'} className={styles.Search} />
                        <button className={styles.SearchBtn}>
                            <Icon className={styles.SearchBtn__img}>search</Icon>
                        </button>
                    </form>
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
                <Link href={'/cart'}>
                    <a className={styles.headerIconsCart}>
                        <div className={styles.headerIcons + ' ' + styles.iconCart}>
                            <Icon>
                                shopping_cart
                            </Icon>
                            <div className={styles.headerIconsCounter}>
                                {totalCounter}
                            </div>
                        </div>
                        <div className={styles.cartPrice}>
                            {totalCost}
                            руб.</div>
                    </a>
                </Link>
            </div>
        </div>
    </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        array: state.carts.cartItems
    }
}

export default connect(mapStateToProps, null)(Header)