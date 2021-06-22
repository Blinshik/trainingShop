import React, {useState} from 'react'
import styles from '../styles/SliderFlex.module.scss'
import SliderItem1 from '../components/SliderItem1.js'
import {connect} from 'react-redux'
import Icon from '@material-ui/core/Icon';


function SliderFlex({array}) {
    const [positionImg, posChange] = useState(0);

    const [slideNumber, slide] = useState(0)

    let slides;
       

   const leftHandler = () => {
       if(slideNumber) {
            slide(slideNumber - 1) 
            posChange(positionImg + 100)
       }
    }

    const rightHandler = () => {
        if(slides < (array.length - slideNumber)) {
            slide(slideNumber + 1) 
            posChange(positionImg - 100)
        }
    }

    const animeHandler = (e) => {
        let itemWidth = e.target.clientWidth
        let sliderWidth = e.target.parentElement.clientWidth
        slides = Math.round(sliderWidth/itemWidth)
    }


    return (
        <div className={styles.sizingPadding} >
         <div className={styles.sizingMargin}>
             <div className={styles.Brings}>
             <div className={styles.Brings__newBrings}>
                <div className={styles.Brings__newBrings__newBringsText}>Новое поступление</div>
                <div className={styles.Brings__newBrings__Arrows}>
                    <button 
                        onClick={leftHandler} 
                        className={styles.Brings__newBrings__Arrows__BigArrow}
                    >
                        <Icon 
                            style={{ fontSize: '35px' }}
                        >
                            west
                        </Icon>
                    </button>
                    <button 
                        onClick={rightHandler} 
                        className={styles.Brings__newBrings__Arrows__BigArrow}
                    >
                        <Icon 
                            style={{ fontSize: '35px' }}
                        >
                            east
                        </Icon>
                    </button>
                </div>
            </div>
            <div className={styles.Brings__rowUp}>
                <div className={styles.Brings__rowUp__row}>
                    {  
                        array.map((e,index) => {
                            return (
                                <div 
                                    key={index+101}
                                    className={styles.Brings__rowUp__row__item}
                                    style={{transform: `translateX(${positionImg}%)`}}
                                    onTransitionEnd={animeHandler}
                                >
                                    <SliderItem1 
                                      itemCart={e} 
                                    />
                                </div>
                            )    
                        })
                    } 
                </div>
            </div>         
             </div>
               </div>
        </div>
    
    )
}

const mapStateToProps = state => {
    return {
        array: state.items.items
    }
}

export default connect(mapStateToProps, null)(SliderFlex)

