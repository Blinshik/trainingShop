import {React, useState, useEffect} from 'react'
import styles from '../styles/SliderFlex.module.scss'
import SliderItem1 from '../components/SliderItem1.js'
import {connect} from 'react-redux'


function SliderFlex({array}) {
    //console.log(styles.sizingPadding);
    // const [numberArr, numberChange] = useState(6);
    // useEffect(() => {
    //     //console.log(styles.sizingPadding);
    //     if (window.innerWidth > 1360) {
    //         numberChange(6)
    //     } else
    //    { if (window.innerWidth > 1140) {
    //         numberChange(5)
    //     } else {if(window.innerWidth > 930) {
    //         numberChange(4)
    //     }else {if(window.innerWidth > 500){
    //         numberChange(3)
    //     } else{if(window.innerWidth > 340){
    //         numberChange(2)
    //     } else{numberChange(1)}
    //     }}
    // }}})
    // {
        
    // }

    const [positionImg, posChange] = useState(0);

    const [slideNumber, slide] = useState(0)
       

   const leftHandler = () => {
       if(slideNumber) {
        slide(slideNumber - 1) 
        posChange(positionImg + 100)
       }
    }

    const rightHandler = () => {
        // if (slideNumber != array.length - numberArr ) {
            slide(slideNumber + 1) 
            posChange(positionImg - 100)
        // }
    }


    return (
        <div className={styles.sizingPadding} >
         <div className={styles.sizingMargin}>
             <div className={styles.Brings}>
             <div className={styles.Brings__newBrings}>
                <div className={styles.Brings__newBrings__newBringsText}>Новое поступление</div>
                <div className={styles.Brings__newBrings__Arrows}>
                    <button onClick={leftHandler} className={styles.Brings__newBrings__Arrows__BigArrow}> {`<`}- </button>
                    <button onClick={rightHandler} className={styles.Brings__newBrings__Arrows__BigArrow}> -{`>`} </button>
                </div>
            </div>
            <div className={styles.Brings__rowUp}>
                <div className={styles.Brings__rowUp__row}
                    
                >
                    {  
                        
                        array.map((e,index) => {
                            return (
                                <div 
                                    key={index+101}
                                    className={styles.Brings__rowUp__row__item}
                                    style={{transform: `translateX(${positionImg}%)`}}
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

