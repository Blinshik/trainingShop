import Head from 'next/head'
import React from 'react'
import Slider from '../components/Slider.js'
import styles from '../styles/Cart.module.scss'
import HeaderFooterLayout from '../components/HeaderFooterLayout.js'
import {connect} from 'react-redux'

function Cart({array}) {
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
                    <ul>
                    {
                        array.map((e,i) => {
                            return (
                                <li key={i+1000}>{e.name}</li>
                            )   
                        })
                    }
                    </ul>
                    
                </div>
            </div>
            <Slider />               
        </HeaderFooterLayout>
       
    )
}

const mapStateToProps = state => {
    return {
        array: state.carts.cartItems
    }
}

export default connect(mapStateToProps, null)(Cart)
