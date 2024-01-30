import { useState } from "react";
import Item from "./Item.jsx"
import './style.scss'
import Footer from "../Footer/";
import geolocationImg from '../../assets/icons/map1.png'
import calendarImg from '../../assets/icons/calen.png'
import peopleImg from '../../assets/icons/people.png'
import tourImg from '../../assets/images/tur.png'
import { Link, useNavigate } from "react-router-dom";
function Blog() {

     const navigate = useNavigate()

     const goToTeamsHash = () => {
         navigate('/third')
 
     }

     return (

          <div className="blog-container">
               <div className="navbar-item">
                    <Item />
               </div>
               <div className="small-text">
                    <span className="span">
                         АВТОБУСНЫЙ ТУР
                    </span>
                    <span className="span">
                         ДЖИППИНГ
                    </span>
                    <span className="span">
                         ЯХТИНГ
                    </span>
                    <span className="span">
                         КАНЬОНИНГ
                    </span>
               </div>
               <div className="blog-wrapper">
                    <div className="input-btn">
                         <div className="input-1">
                              <input type="text" name="" value={"Абхазия"} id="county" />
                              <img src={geolocationImg} alt="" width={23} height={28} />
                         </div>
                         <div className="input-2">
                              <input type="text" name="" value={"2022-07-16"} id="date" />
                              <img src={calendarImg} alt="" width={23} height={23} />
                         </div>
                         <div className="input-3">
                              <input type="text" name="" id="people" value={"5 человек"} />
                              <img src={peopleImg} alt="" width={23} height={23} />
                         </div>
                         <button className="info-btn">Показать</button>
                    </div>
               </div>

               <div className="our-blogs">

                    <div className="second-container">
                         <div className="main-container">
                              <div className="first-con">
                                   <h2>Фильтры</h2>
                                   <div className="price">
                                        <b>Стоимость</b>
                                        <br /><br /><div className="input">
                                             <input type="text" value={"1600"} />
                                             <input type="text" value={'4000'} />
                                        </div>
                                        <div className="range">
                                             <br /><br /><input type="range" />
                                        </div>
                                   </div>
                                   <hr />
                                   <div className="people">
                                        <h3>Количество человек</h3>

                                        <div>
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                             <input type="text" value={"1 чел."} />
                                        </div>
                                   </div>
                                   <hr />
                                   <div className="radio-input">
                                        <b>Место</b>
                                        <div>
                                             <input type="radio" name="city" checked />
                                             <label htmlFor="">Абхазия</label>
                                        </div>
                                        <div>
                                             <input type="radio" />
                                             <label htmlFor="">Америка</label>
                                        </div>
                                        <div>
                                             <input type="radio" />
                                             <label htmlFor="">Сочи</label>
                                        </div>
                                        <div>
                                             <input type="radio" />
                                             <label htmlFor="">Адлер</label>
                                        </div>
                                        <div>
                                             <input type="radio" />
                                             <label htmlFor="">Адлер</label>
                                        </div>
                                   </div>
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <hr />
                                   <div className="b"><b>Длительность</b></div>
                                   <br />
                                   <br />
                                   <br />
                                   <hr />
                                   <div className="b2"><b>Дата</b></div>

                              </div>
                         </div>
                    </div>

                    <div className="first-container">
                         <h2>OUR TOURS</h2>
                         <div className="content">
                              <img src={tourImg} width={250} height={330} alt="" />
                              <div className="text-content">
                                   <span>Автобусный тур</span>
                                   <br />
                                   <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>

                                   <Link onClick={goToTeamsHash} to={'/third'}>
                                        <button className="info-btn">Подробнее</button>
                                   </Link>


                              </div>
                         </div>
                         <div className="content">
                              <img src={tourImg} width={250} height={330} alt="" />
                              <div className="text-content">
                                   <span>Автобусный тур</span>
                                   <br />
                                   <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>


                                   <Link onClick={goToTeamsHash} to={'/third'}>
                                        <button className="info-btn">Подробнее</button>
                                   </Link>

                              </div>
                         </div>
                         <div className="content">
                              <img src={tourImg} width={250} height={330} alt="" />
                              <div className="text-content">
                                   <span>Автобусный тур</span>
                                   <br />
                                   <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>


                                   <Link onClick={goToTeamsHash} to={'/third'}>
                                        <button className="info-btn">Подробнее</button>
                                   </Link>

                              </div>
                         </div>

                         <div className="content">
                              <img src={tourImg} width={250} height={330} alt="" />
                              <div className="text-content">

                                   <span>Автобусный тур</span>
                                   <br />
                                   <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>


                                   <Link onClick={goToTeamsHash} to={'/third'}>
                                        <button className="info-btn">Подробнее</button>
                                   </Link>

                              </div>
                         </div>
                    </div>

               </div>


               <div className="footer">
                    <Footer />
               </div>

          </div>
     );

}

export default Blog;