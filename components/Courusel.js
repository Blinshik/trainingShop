import {React, useState} from 'react'
import styles from '../styles/Courusel.module.scss'

export default function Courusel() {

    const array = [
        {
            urlI:'/sliderImg.webp',
            text:'Премиум продукты высокого качества'
        },
        {
            urlI:'/sliderImg.webp',
            text:'Здоровая еда'
        },
        {
            urlI:'/sliderImg.webp',
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
                    <div className={styles.imgSlider__slider__text}>{e.text}</div>
                    
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
                            onClick={() => {
                                posChange(-index*100);
                                slide(index)
                                }
                            }
                            style={{   backgroundColor:  (slideNumber == index) ? 'white' : 'gray' }} 
                        ></div>
                    )
                })
            }
            </div>
                <button onClick={leftHandler} className={styles.imgSlider__leftArrow}> 
                    <span className="material-icons-outlined" style={{ fontSize: "40px" }}>
                        chevron_left
                    </span>
                </button>
                <button onClick={rightHandler} className={styles.imgSlider__rightArrow}>
                    <span className="material-icons-outlined" style={{ fontSize: "40px" }}>
                        chevron_right
                    </span>
                </button>
        </div>
    </div>
    )
}
