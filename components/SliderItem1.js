import Icon from '@material-ui/core/Icon';
import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/SliderItem1.module.scss';
import addCart from '../redux/actions.js'

function SliderItem1({itemCart, addCart}) {
    const cartHandler = () => {
        addCart(itemCart)
    }

    return (
        <div className={styles.newBringsSlider}>
            <div className={styles.newBringsSlider__item}>
                <div>
                    <img src={itemCart.img} alt={itemCart.name} className={styles.newBringsSlider__item__img} />
                </div>
                <div 
                    className={styles.newBringsSlider__item__sale}
                    style={{display: (itemCart.oldPrice) ? 'block' : 'none'}}
                >{Math.round(100*(itemCart.price/itemCart.oldPrice - 1))}%</div>
                
                        <div className={styles.newBringsSlider__item__name}> {itemCart.name} , 1 шт.</div>
                        <div className={styles.newBringsSlider__item__afterImg}>
                            <div
                                className={styles.newBringsSlider__item__afterImg__priceOld}
                                style={{visibility: itemCart.oldPrice ? 'visiable' : 'hidden'}}
                            >{itemCart.oldPrice} руб</div>
                            <div className={styles.newBringsSlider__item__afterImg__priceNew}>{itemCart.price} руб</div>
                            <button 
                                className={styles.newBringsSlider__item__afterImg__priceBtn}
                                onClick={cartHandler}
                            >
                                В корзину
                                <Icon>
                                    shopping_cart
                                </Icon>
                            </button>
                        </div>
               
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addCart
}


export default connect(null, mapDispatchToProps)(SliderItem1)



