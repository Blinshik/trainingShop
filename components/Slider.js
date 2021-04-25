import {React, useState} from 'react'
import styles from '../styles/Slider.module.scss'
import SliderItem1 from '../components/SliderItem1.js'
import {connect} from 'react-redux'


function Slider({array}) {
    const numberArr = 6;
    
       
    

    const [positionImg, posChange] = useState(0);

    const [slideNumber, slide] = useState(0)
       

   const leftHandler = () => {
       if(slideNumber) {
        slide(slideNumber - 1) 
        posChange(positionImg + 100)
       }
    }

    const rightHandler = () => {
        if (slideNumber != array.length - numberArr ) {
            slide(slideNumber + 1) 
            posChange(positionImg - 100)
        }
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
                <div className={styles.Brings__rowUp__row}>
                    {  
                        array.map((e,index) => {
                            return (
                                <div style={{
                                    // @media(max-width: 1474px) {
                                    //     $numberArr: 5
                                    // },
                                    // @media(max-width: 1240px) {
                                    //     $numberArr: 4
                                    // },
                                        position: ((index < slideNumber)|((index-numberArr+1)>slideNumber)) ? 'absolute' : '',  
                                        transform: ((index < slideNumber)|((index-numberArr+1)>slideNumber)) ? `translateX(${positionImg + index*100}%)` : '',
                                        display: ((index < slideNumber)|((index-numberArr+1)>slideNumber)) ? 'none' : ''
                                    }}
                                    key={index+101}
                                    className={styles.Brings__rowUp__row__item}
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

export default connect(mapStateToProps, null)(Slider)


