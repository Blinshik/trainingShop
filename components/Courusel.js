import {React, useState} from 'react'
import styles from '../styles/Courusel.module.scss'

export default function Courusel() {

    const array = [
        {
            urlI:'/products.jpg',
            text:'Премиум продукты высокого качества'
        },
        {
            urlI:'/products.jpg',
            text:'Здоровая еда'
        },
        {
            urlI:'/products.jpg',
            text:'Вкусная еда'
        },
    ]
     

    const [positionImg, posChange] = useState(0);

    const [slideNumber, slide] = useState(0)
       

   const leftHandler = () => {
        if (slideNumber === 0) {
            slide(slideNumber +1)   
            posChange(positionImg - 100)
        } else {
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
        <div className={styles.sizingMargin + ' ' + styles.imgSlider}>
            {
                array.map((e, number) => {
                    return (  
                    <div 
                        className={styles.imgSlider__slider} 
                        style={{ backgroundImage: `url('${e.urlI}')`,transform: `translateX(${number*100+positionImg}%)` }} 
                        key={number+5}
                    >
                    {e.text}
                  </div>
                  )            
                })
            }
            <div className={styles.imgSlider__pointBox}>
            {
                array.map((e,index) => {
                    return (
                        <div
                            className={styles.imgSlider__pointBox__point} 
                            key={index} 

                            style={{   backgroundColor:  (slideNumber == index) ? 'white' : 'gray' }} 
                        ></div>
                    )
                })
            }
            </div>
           
                
              <button onClick={leftHandler} className={styles.imgSlider__leftArrow}> {`<`} </button>
              <button onClick={rightHandler} className={styles.imgSlider__rightArrow}>{`>`}</button>
        </div>
    </div>
    )
}
