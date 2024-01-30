import './style.scss'
import Heading from '../common/Heading';
import { Link, useNavigate } from 'react-router-dom';
import ThirdItem from './ThirdItem';
import Carousel3 from './Carousel3';
import PriceHour1 from '../../assets/thridImages/priceHour1.png'
import PriceHour2 from '../../assets/thridImages/priceHour2.png'
import PriceHour3 from '../../assets/thridImages/priceHour3.png'
import SecondImg from '../../assets/thridImages/secondImg.png'
import ThirdFooter from './ThirdFooter';
import Calendar from './Calendar';
import ThirdGallery from './thirdGallery';
import ThirdCarouselImg1 from '../../assets/thridImages/thirdcarouselImg1.png'
import ThirdCarouselImg2 from '../../assets/thridImages/thirdcarouselImg2.png'
import bigImg from '../../assets/images/aboutBackImg.png'
import thirdIcon from '../../assets/thridImages/icon1.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, display: "block", background: "blue", position: 'absolute',
                top: '700px', borderRadius: '50%'
            }}
            onClick={onClick}
        />
    );
}


function Third() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };


    return (
        <div className="thrid-container">
            <div className="third-item">
                <ThirdItem />
            </div>

            <div className="description">
                <div className="text3">
                    <h2>Описание экскурсии</h2>
                    <p>
                        Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок.
                    </p>
                </div>
                <div className="price-hour">
                    <img src={PriceHour1}   alt="" />
                    <img src={PriceHour2}   alt="" />
                    <img src={PriceHour3}   alt="" />
                </div>
            </div>

            <div className="img-calendar">
                <img src={SecondImg} alt="" />

                <div className="calendar2">
                    <Calendar />
                </div>
            </div>

            <div className="desc2-carousel">
                <div className="texts">
                    <h2>Описание маршрута</h2>
                    <ul>
                        <li>Город Гагра, Колоннада, ресторан "Гагрипш", Парк принца Ольденбурского;</li>
                        <li>Смотровая площадка "Прощай Родина", "Чабгарский" карниз, Подвесной мост через реку "Бзыбь";</li>
                        <li>Дегустация сыра, меда, вина, чачи (входит в стоимость экскурсии), Голубое Озеро, Юпшарский каньон ("Каменный мешок"), Озеро "Рица", Водопады "Девичьи и мужские слезы".</li>
                        <b>Далее на выбор:</b>
                        <li>Монастырь "Новый Афон", Новоафонская Пещера, "Рукотворный" водопад, храм "Симона Кананита", Лебединое озеро.</li>
                        <li>Город Гагра, Колоннада, ресторан "Гагрипш", Парк принца Ольденбурского;</li>
                    </ul>
                </div>
                <div className="carousel">

                    <Slider {...settings}>
                        <img src={ThirdCarouselImg1} alt="" />
                        <img src={ThirdCarouselImg1} alt="" />
                        <img src={ThirdCarouselImg1} alt="" />
                    </Slider>

                </div>
            </div>

            <div className="nothing">
                <h2>Дополнительные расходы (по желанию)</h2>
                <img src={PriceHour1} alt="" />
                <img src={PriceHour2} alt="" />
                <img src={PriceHour3} alt="" />
                <img src={PriceHour1} alt="" />
                <img src={PriceHour1} alt="" />
            </div>

            <div className="value">
                <h3>Важная информация</h3>
                <span>При пересечении границы (Россия-Абхазия) при себе иметь:</span>

                <div className="credit">
                    <img src={thirdIcon} alt="" />
                    <h2>Паспорт гражданина РФ</h2>
                </div>

                <div className="credit">
                    <img src={thirdIcon} alt="" />
                    <h2>Гражданам до 14 лет свидетельство о рождении</h2>
                </div>
                <p>Несовершеннолетние дети пересекают границу в сопровождении родителей, в сопровождении законного представителя (нотариально заверенная доверенность с указанием страны вывоза ребенка).</p>


                <div className="divs">
                    <div className='div-1'>Иностранным гражданам въезд в Абхазию ограничен, кроме граждан Украины, республик ДНР и ЛНР.</div>
                    <br /><br />
                    <br />
                    <br />
                    <div className='div-1'>При возвращении из Абхазии в Россию сдавать ПЦР-тест не нужно, на карантин помещать не будут (Постановление Правительства РФ 1996-Р от 01.08.2020).</div>
                </div>
            </div>


            <div className="third-gallery">
                <ThirdGallery />
            </div>

            <div className="carousel3">
                <Carousel3 />
            </div>


            <div className="inputs-wrapper-img">
                <div className="third-img">
                    <img src={bigImg} alt="" />
                </div>

                <div className="third-inputs">
                    <input type="text" value={'10 ноября 2021'} />
                    <br /> <input type="text" value={'5 взрослых'} />
                    <br /><input type="text" value={'Количество детей'} />
                    <br /><button className='info-btn'>Забронировать</button>
                </div>

            </div>

            <div className="third-footer">
                <ThirdFooter/>
            </div>
        </div>


    );
}

export default Third;