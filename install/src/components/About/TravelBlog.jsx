import { Link } from "react-router-dom";
import './style.scss'

function TravelBlog() {
    return (
        <>
            <div className="travel-blog-wrapper">
                <div className="travel-text">
                    <h2>Популярные экскурсии</h2>
                </div>
                <div className="link"> <Link to={'/'}>Смотреть все</Link></div>


                <div className="carousel-images">

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

                </div>
            </div>
        </>

    );
}

export default TravelBlog;