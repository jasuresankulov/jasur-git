import { Link } from "react-router-dom";
import './style.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function TravelBlog() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <div className="travel-blog-wrapper">
            <div className="travel-text">
                <h2>Популярные экскурсии</h2>
            </div>
            <div className="link"> <Link to={'/'}>Смотреть все</Link></div>

            <div className="carousel-wrapper">

                <Carousel responsive={responsive}>

                    <div className="first">

                        <div className="carousel-text">
                            <span>
                                Автобусный тур
                                <br />
                                <span className="yello-text">Обзорная по Сочи (из Адлера)</span>
                                6 часов
                                618 ₽
                                Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </span>
                            <br />
                            <button className="info-btn">Подробнее</button>

                        </div>
                    </div>

                    <div className="second">
                        <div className="carousel-text">
                            <span>
                                Автобусный тур
                                <br />
                                <span className="yello-text">Обзорная по Сочи (из Адлера)</span>
                                6 часов
                                618 ₽
                                Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </span>
                            <br />
                            <br />
                            <button className="info-btn">Подробнее</button>
                        </div>
                    </div>

                    <div className="third">
                        <div className="carousel-text">
                            <span>
                                Автобусный тур
                                <br />
                                <span className="yello-text">Обзорная по Сочи (из Адлера)</span>
                                6 часов
                                618 ₽
                                Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </span>
                            <br />
                            <br />
                            <button className="info-btn">Подробнее</button>
                        </div>
                    </div>

                    <div className="fourth">
                        <div className="carousel-text">
                            <span>
                                Автобусный тур
                                <br />
                                <span className="yello-text">Обзорная по Сочи (из Адлера)</span>
                                6 часов
                                618 ₽
                                Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </span>
                            <br />
                            <br />
                            <button className="info-btn">Подробнее</button>
                        </div>


                    </div>

                    <div className="first">

                        <div className="carousel-text">
                            <span>
                                Автобусный тур
                                <br />
                                <span className="yello-text">Обзорная по Сочи (из Адлера)</span>
                                6 часов
                                618 ₽
                                Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </span>
                            <br />
                            <button className="info-btn">Подробнее</button>

                        </div>
                    </div>

                    <div className="second">
                        <div className="carousel-text">
                            <span>
                                Автобусный тур
                                <br />
                                <span className="yello-text">Обзорная по Сочи (из Адлера)</span>
                                6 часов
                                618 ₽
                                Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </span>
                            <br />
                            <br />
                            <button className="info-btn">Подробнее</button>
                        </div>
                    </div>

                    <div className="third">
                        <div className="carousel-text">
                            <span>
                                Автобусный тур
                                <br />
                                <span className="yello-text">Обзорная по Сочи (из Адлера)</span>
                                6 часов
                                618 ₽
                                Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </span>
                            <br />
                            <br />
                            <button className="info-btn">Подробнее</button>
                        </div>
                    </div>

                    <div className="fourth">
                        <div className="carousel-text">
                            <span>
                                Автобусный тур
                                <br />
                                <span className="yello-text">Обзорная по Сочи (из Адлера)</span>
                                6 часов
                                618 ₽
                                Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </span>
                            <br />
                            <br />
                            <button className="info-btn">Подробнее</button>
                        </div>
                    </div>

                </Carousel>;
            </div>
        </div>
    );
}

export default TravelBlog;