import React from 'react'
import styles from '../styles/HomePage.module.scss'
import Courusel from '../components/Courusel.js'
import Slider from '../components/Slider.js'
//import SliderItem1 from '../components/SliderItem1.js'

export default function HomePage() {
    return (
        
        <div>
            <Courusel />
            <Slider  />
    
     <div className={styles.sizingPadding}>
         <div className={styles.sizingMargin + ' ' + styles.lines} >
             <div className={styles.line}>
                 <div className={styles.firstLineItem}>
                     <img src="/tort.webp" alt="Tort" className={styles.firstLineItemImg} />
                     <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                 </div>
                 <div className={styles.firstLineItem}>
                    <img src="/tort.webp" alt="Tort" className={styles.firstLineItemImg} />
                    <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                </div>
             </div>
             <div className={styles.line}>
                    <div className={styles.secondLineItem}>
                        <img src="/tort.webp" alt="Tort" className={styles.secondLineItemImg} />
                        <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                    </div>           
                    <div className={styles.secondLineItem}>
                        <img src="/tort.webp" alt="Tort" className={styles.secondLineItemImg} />
                        <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                    </div>
                    <div className={styles.secondLineItem}>
                        <img src="/tort.webp" alt="Tort" className={styles.secondLineItemImg} />
                        <div className={styles.firstLineItemText}>Торты, десерты, сладкая выпечка</div>
                    </div> 
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
                    <input className={styles.feedback__nameForm__name} placeholder={'Имя*'}></input>
                    <input className={styles.feedback__nameForm__name} placeholder={'Ваша почта*'}></input>
                </div>
                <div className={styles.feedback__comment}>
                    <textarea placeholder={'Ваш вопрос, отзыв или пожелание*'} className={styles.feedback__comment__place}></textarea>
                </div>
                <div className={styles.feedback__checkbox}>
                    <button className={styles.feedback__checkbox__btn}></button>
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
    <div className={styles.sizingPadding + ' ' + styles.bgcFooter}>
        <div className={styles.sizingMargin}>
            <div className={styles.footer}>
                <div className={styles.footer__up}>
                    <div className={styles.footer__up__left}>
                        <div className={styles.footer__up__leftItem}>
                            <div className={styles.footer__up__left__title}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                        </div>
                        <div className={styles.footer__up__leftItem}>
                            <div className={styles.footer__up__left__title}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                        </div>
                        <div className={styles.footer__up__leftItem}>
                            <div className={styles.footer__up__left__title}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                            <div className={styles.footer__up__left__item}>О магазине Марком</div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.footer__up__left__title}>Мы в соц. сетях</div>
                        <div className={styles.footer__imgs}></div>
                        <div className={styles.footer__up__numbers}>
                            <div className={styles.footer__up__numbers__big}>+7(800) 800-80-80</div>
                            <div className={styles.footer__up__numbers__cmall}>справочная служба</div>
                        </div>
                        <div className={styles.footer__up__numbers}>
                            <div className={styles.footer__up__numbers__big}>+7(800) 800-80-80</div>
                            <div className={styles.footer__up__numbers__cmall}>справочная служба</div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__down}>
                    <img src={'/markom_logo.svg'}></img>
                    <div className={styles.footer__imgs}></div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.sizingPadding}>
        <div className={styles.sizingMargin}>
            <div className={styles.foot}>
                <p className={styles.foot__left}>© 2020 Любое использование контента без письменного разрешения запрещено</p>
                <div className={styles.foot__left}>Интернет-магазин создан на InSales</div>
            </div>
        </div>
    </div>


    </div>
        
        
    )
}
