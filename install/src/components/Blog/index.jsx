import { useState } from "react";
import Item from "./Item.jsx"
import './style.scss'
import Footer from "../Footer/";
import ic1 from '../../assets/icons/map1.png'
import calen1 from '../../assets/icons/calen.png'
import People from '../../assets/icons/people.png'
import Tur from '../../assets/images/tur.png'
function Blog() {


     return (

          <>
               <Item />
               <div className="blog-wrapper">
                    <br />
                    <br />
                    <div className="blog-container">
                         <div className="small-text">
                              <span >

                                   АВТОБУСНЫЙ ТУР
                                   <div >
                                   </div>
                              </span>
                              <span>
                                   ДЖИППИНГ
                                   <div></div>
                              </span>
                              <span>
                                   ЯХТИНГ
                                   <div></div>
                              </span>
                              <span>
                                   КАНЬОНИНГ
                                   <div></div>
                              </span>
                         </div>
                         <div className="input-btn">
                              <div className="container">
                                   <input type="text" name="" value={"Абхазия"} id="county" />
                                   <img src={ic1} alt="" width={30} height={30} />
                                   <input type="text" name="" value={"2022-07-16"} id="date" />
                                   <img src={calen1} alt="" width={30} height={30} />
                                   <input type="text" name="" id="people" value={"5 человек"} />
                                   <img src={People} alt="" width={30} height={30} />
                                   <button className="info-btn">Показать</button>
                              </div>
                         </div>
                    </div>

                    <div className="second-blog-container">
                         <div className="main-container">
                              <div className="first-con">

                              </div>
                         </div>
                         <div className="cont2">
                              <div className="second-con">
                                   <img src={Tur} width={250} height={330} alt="" />
                                   <div className="texts">
                                        <span>Автобусный тур</span>
                                        <br />
                                        <b>Золотое кольцо Абхазии (из Адлера)</b>
                                        <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                                   </div>
                              </div>
                              <br />
                              <br />
                              <div className="second-con">
                                   <img src={Tur} width={250} height={330} alt="" />
                                   <div className="texts">
                                        <span>Автобусный тур</span>
                                        <br />
                                        <b>Золотое кольцо Абхазии (из Адлера)</b>
                                        <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                                   </div>

                              </div>
                              <br />
                              <br />
                              <div className="second-con">
                                   <img src={Tur} width={250} height={330} alt="" />
                                   <div className="texts">
                                        <span>Автобусный тур</span>
                                        <br />
                                        <b>Золотое кольцо Абхазии (из Адлера)</b>
                                        <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                                   </div>

                              </div>
                              <br />
                              <br />
                              <div className="second-con">
                                   <img src={Tur} width={250} height={330} alt="" />
                                   <div className="texts">
                                        <span>Автобусный тур</span>
                                        <br />
                                        <b>Золотое кольцо Абхазии (из Адлера)</b>
                                        <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                                   </div>

                              </div>
                         </div>

                    </div>


                    <div className="footer">
                         <Footer />
                    </div>
               </div>
          </>

     );

}

export default Blog;