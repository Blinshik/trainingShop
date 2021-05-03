import Head from 'next/head'
import React from 'react'
import SliderFlex from '../components/SliderFlex.js'
import styles from '../styles/Cart.module.scss'
import HeaderFooterLayout from '../components/HeaderFooterLayout.js'
import {connect} from 'react-redux'
import {minusCart, removeCart, plusCart} from '../redux/actions.js'


function Cart({array, removeCart, minusCart, plusCart}) {
    let totalCost = 0
    array.forEach((el) => {
        totalCost = totalCost + (el.counter + 1)*el.item.price
    });


   

    return (
        <HeaderFooterLayout>
            <Head>
                <title>Markom | cart</title>
            </Head>
            <div className={styles.sizingPadding}>
                <div className={styles.sizingMargin}>
                    <h1 className={styles.cart}>Корзина</h1>
                </div>
            </div>
            <div className={styles.sizingPadding}>
                <div className={styles.sizingMargin}>
                <div className={styles.empty} style={{display: array.length ? 'none' : ''}} > Ваша корзина пуста</div>
                    <div className={styles.cartItems} style={{display: !array.length ? 'none' : ''}}>
                        <ul className={styles.ul}>
                        {
                             
                            array.map((e,i) => {
                                const removeHandler = () => {
                                    removeCart(e)
                                  }
                                const minusHandler = () => {
                                    minusCart(e)
                                }

                                const plusHandler = () => {
                                    plusCart(e)
                                }


                                return (
                                    <li key={i+1000} className={styles.cartItems__item}>
                                        <img src={e.item.img} className={styles.cartItems__item__img}></img>
                                            <div className={styles.cartItems__item__name}>
                                                {e.item.name}
                                            </div>
                                            <div className={styles.cartItems__item__price}>
                                                {e.item.price} руб
                                            </div>
                                            <div className={styles.cartItems__item__btn}>
                                                <button 
                                                    className={styles.cartItems__item__btn__minus}
                                                    onClick={minusHandler}
                                                >-</button>
                                                <div className={styles.cartItems__item__btn__counter}>
                                                    {e.counter+1}
                                                </div>
                                                <button
                                                    className={styles.cartItems__item__btn__plus}
                                                    onClick={plusHandler}
                                                >+</button>
                                            </div>
                                            <button 
                                                className={styles.cartItems__item__delete}
                                                onClick={removeHandler}
                                            >
                                                X</button>
                                            <div className={styles.cartItems__item__cost}>{e.item.price*(e.counter+1)} руб</div>
                                    </li>
                                )   
                            })
                        }
                        </ul>
                        <div className={styles.cartItems__summ}>
                            <div className={styles.cartItems__summ__text}>Итого:</div>
                            <div className={styles.cartItems__summ__number}>
                                { 
                                   totalCost
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderFlex />             
        </HeaderFooterLayout>
       
    )
}

const mapStateToProps = state => {
    return {
        array: state.carts.cartItems
    }
}

const mapDispatchToProps = {
    plusCart,
    removeCart,
    minusCart
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
