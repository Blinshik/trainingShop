import {React, useState} from 'react'
import styles from '../styles/Slider.module.scss'
import SliderItem1 from '../components/SliderItem1.js'


export default function Slider() {
    const array = [1,2,3,4,5,6,7,8]
    

    const [positionImg, posChange] = useState(0);

    const [slideNumber, slide] = useState(0)
       

   const leftHandler = () => {
       if(!slideNumber) {
        slide(slideNumber -1) 
        posChange(positionImg + 100)
       }
    }

    const rightHandler = () => {
        if (slideNumber === array.length-1) {
            slide(slideNumber -1)   
            posChange(positionImg + 100)
        } else {
            slide(slideNumber +1) 
            posChange(positionImg - 100)
        }
    }


    return (
        <div className={styles.sizingPadding}>
         <div className={styles.sizingMargin}>
             <div className={styles.Brings}>
             <div className={styles.Brings__newBrings}>
                <div className={styles.Brings__newBrings__newBringsText}>Новое поступление</div>
                <div className={styles.Brings__newBrings__Arrows}>
                    <div onClick={leftHandler} className={styles.Brings__newBrings__Arrows__BigArrow}> {`<`}- </div>
                    <div onClick={rightHandler} className={styles.Brings__newBrings__Arrows__BigArrow}> -{`>`} </div>
                </div>
            </div>
            <div className={styles.Brings__row}>
                {/* <SliderItem1 /> */}
            {
                array.map((e,index) => {
                    return (
                        
                        <SliderItem1  key={index+101}  />
                        
                    )    
                })
            } 
            </div>
             </div>
            
               </div>
        </div>
    
    )
}




