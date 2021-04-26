import {React, useState} from 'react'
import styles from '../styles/HomePage.module.scss'
import Courusel from '../components/Courusel.js'
import Slider from '../components/Slider.js'

export default function HomePage() {

    const [checking, commentChecked] = useState(false)

    const checkF = () => commentChecked(!checking)

    const [nameChecked, nameCheckedHook] = useState('aAaAa')
    const [mailChecked, mailCheckedHook] = useState('aAaAa')
    const [textChecked, textCheckedHook] = useState('aAaAa')

    return (
        
        <div>
            <Courusel />
            <Slider  />
    
     <div className={styles.sizingPadding}>
         <div className={styles.sizingMargin + ' ' + styles.lines} >
                 <div className={styles.firstLineItemF}>
                     <img src="/tort.webp" alt="Tort" className={styles.LineItemImg} />
                     <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                 </div>
                 <div className={styles.firstLineItemS}>
                    <img src="/tort.webp" alt="Tort" className={styles.LineItemImg} />
                    <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                </div>
             
            
                    <div className={styles.secondLineItemF}>
                        <img src="/tort.webp" alt="Tort" className={styles.LineItemImg} />
                        <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                    </div>           
                    <div className={styles.secondLineItemS}>
                        <img src="/tort.webp" alt="Tort" className={styles.LineItemImg} />
                        <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                    </div>
                    <div className={styles.secondLineItemT}>
                        <img src="/tort.webp" alt="Tort" className={styles.LineItemImg} />
                        <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                    </div> 
             
         </div>
     </div>
     <div className={styles.sizingPadding}>
         <div className={styles.sizingMargin}>
             <div className={styles.order}>
                <div className={styles.order__img}>
                    <div className={styles.order__img__headText}>Десерты на заказ</div>
                    <div className={styles.order__img__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde fuga numquam qui ipsam eaque minima nemo, eveniet ex mollitia vitae quo recusandae quis laboriosam voluptatibus quod vel, adipisci dolores.</div>
                    <button className={styles.order__img__btn}>Узнать подробнее</button>
                 </div>
             </div>
         </div>
     </div>
     <Slider  />
     <Slider  />
    
    <div className={styles.sizingPadding}>
        <div className={styles.sizingMargin}>
            <div className={styles.plusHeadText}>Наши плюсы</div>
            <div className={styles.plusrow}>
                <div className={styles.pluses}>
                        <img src="/plus1.svg" alt="Plus1" className={styles.pluses__img} />                   
                        <div className={styles.pluses__textHead}>Широкий ассортимент</div>
                        <p className={styles.pluses__text}>Мы закупаем фрукты и овощи по всему миру – от Эквадора до Китая. Более 400 сортов овощей и фруктов представлены на наших прилавках.</p>
                </div>
                <div className={styles.pluses}>
                        <img src="/plus2.svg" alt="Plus2" className={styles.pluses__img} />                   
                        <div className={styles.pluses__textHead}>Всегда свежие</div>
                        <p className={styles.pluses__text}>Фрукты и овощи перевозятся в машинах-рефрижераторах с разными режимами температуры. Мы знаем, сколько градусов внутри каждого плода!</p>
                </div>
                <div className={styles.pluses}>
                        <img src="/plus3.svg" alt="Plus3" className={styles.pluses__img} />                   
                        <div className={styles.pluses__textHead}>Контроль качества</div>
                        <p className={styles.pluses__text}>Мы контролируем качество – от поставщика до полки. Для хранения мы используем самое современное оборудование.</p>
                </div>
            </div>
        </div>
    </div>
    <Slider  />
    <div className={styles.sizingPadding}>
        <div className={styles.sizingMargin}>
            <div className={styles.plusHeadText}>Акции</div>
            <div className={styles.promotionsRow}>
                <div className={styles.promotions}>
                <div>
                        <img src="/promotions.jpg" alt="Promotion1" className={styles.promotions__img} />
                    </div>                        <div className={styles.promotions__textHead} >Отборные фрукты и овощи, с привлекательной ценой</div>
                        <div className={styles.promotions__text}>
                            10.11.2020
                        </div>
                </div>
                <div className={styles.promotions}>
                    <div>
                        <img src="/promotions.jpg" alt="Promotion1" className={styles.promotions__img} />
                    </div>                 
                        <div className={styles.promotions__textHead} >Дни испанской кухни</div>
                        <div className={styles.promotions__text}>
                            10.11.2020
                        </div>
                </div>
                <div className={styles.promotions}>
                <div>
                        <img src="/promotions.jpg" alt="Promotion1" className={styles.promotions__img} />
                    </div>                        <div className={styles.promotions__textHead} >Отборные фрукты и овощи, с привлекательной ценой</div>
                        <div className={styles.promotions__text}>
                            10.11.2020  
                        </div>
                </div>
                <div className={styles.promotions}>
                <div>
                        <img src="/promotions.jpg" alt="Promotion1" className={styles.promotions__img} />
                    </div>                        <div className={styles.promotions__textHead} >Отборные фрукты и овощи, с привлекательной ценой</div>
                        <div className={styles.promotions__text}>
                            10.11.2020
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.sizingPadding}>
        <div className={styles.sizingMargin}>
            <div className={styles.plusHeadText}>Отзывы клиентов</div>
            <div className={styles.commentsRow}>
                <div className={styles.commentsBgc}>
                    <div className={styles.comments}>                  
                            <div className={styles.comments__textHead}>Alexey</div>
                            <p className={styles.comments__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque ultrices tincidunt. Sed malesuada ipsum tellus, eget auctor nisl luctus vitae. Duis nec eros turpis. Sed convallis felis dui, sed suscipit nisi lobortis id.</p>
                    </div>
                </div>
                <div className={styles.commentsBgc}>
                    <div className={styles.comments}>                  
                            <div className={styles.comments__textHead}>Alexey</div>
                            <p className={styles.comments__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque ultrices tincidunt. Sed malesuada ipsum tellus, eget auctor nisl luctus vitae. Duis nec eros turpis. Sed convallis felis dui, sed suscipit nisi lobortis id.</p>
                    </div>
                </div>
                <div className={styles.commentsBgc}>
                    <div className={styles.comments}>                  
                            <div className={styles.comments__textHead}>Alexey</div>
                            <p className={styles.comments__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque ultrices tincidunt. Sed malesuada ipsum tellus, eget auctor nisl luctus vitae. Duis nec eros turpis. Sed convallis felis dui, sed suscipit nisi lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque ultrices tincidunt. Sed malesuada ipsum tellus, eget auctor nisl luctus vitae. Duis nec eros turpis. Sed convallis felis dui, sed suscipit nisi lobortis id.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.sizingPadding}>
        <div className={styles.sizingMargin}>
            <div className={styles.feedback}>
                <div className={styles.feedback__textHead}>Обратная связь</div>
                <div className={styles.feedback__nameForm}>
                    <input
                        onChange={(e) => {nameCheckedHook(e.target.value)}}
                        onFocus={() => {
                            if(!nameChecked){nameCheckedHook('aAaAa')}}
                        }
                        onBlur={() => {
                            if(nameChecked === 'aAaAa'){nameCheckedHook('')}
                        }} 
                        className={styles.feedback__nameForm__name} placeholder={'Имя*'}
                        style={{gridArea: 'nameForm'}} 
                    ></input>
                    
                    <input 
                        className={styles.feedback__nameForm__name} placeholder={'Ваша почта*'}
                        onChange={(e) => {mailCheckedHook(e.target.value)}}
                        onFocus={() => {
                            if(!mailChecked){mailCheckedHook('aAaAa')}}
                        }
                        onBlur={() => {
                            if(mailChecked === 'aAaAa'){mailCheckedHook('')}
                        }} 
                        style={{gridArea: 'mailForm'}} 
                    ></input>
                    <span
                       style={{color: 'red', display: (nameChecked) ? "none" : "block", gridArea: 'name'}}
                    >Необходимо заполнить поле Имя</span>
                    <span
                        style={{color: 'red', display: (mailChecked) ? "none" : "block", gridArea: 'mail'}}
                    >Не верно заполнено поле Email</span>
                </div>
                <div className={styles.feedback__comment}>
                    <textarea 
                        onChange={(e) => {textCheckedHook(e.target.value)}}
                        onFocus={() => {
                            if(!textChecked){textCheckedHook('aAaAa')}}
                        }
                        onBlur={() => {
                            if(textChecked === 'aAaAa'){textCheckedHook('')}
                        }} 
                        placeholder={'Ваш вопрос, отзыв или пожелание*'} 
                        className={styles.feedback__comment__place}
                    ></textarea>
                    <span
                        style={{color: 'red', display: (textChecked) ? "none" : "block"}} 
                    >Пожалуйста, введите сообщение</span>
                </div>
                <div className={styles.feedback__checkbox}>
                        
                        <button className={styles.feedback__checkbox__btn} onClick={checkF}>
                            <div 
                                className={styles.feedback__checkbox__checked} 
                                style={{ display: (checking == true) ? 'block' : 'none'  }}
                            >+</div>
                        </button>             
                    <div className={styles.feedback__checkbox__text}>
                         Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности *
                    </div>
                </div>
                <div className={styles.feedback__container}>
                    <button className={styles.feedback__container__btn}>Отправить</button>
                </div>
                
            </div>
        </div>
    </div>
    


    </div>
        
        
    )
}
