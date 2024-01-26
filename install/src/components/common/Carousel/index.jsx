import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './slide.scss'
import slid1 from '../../../assets/images/slides/slide1.png'
import slid2 from '../../../assets/images/slides/slide2.png'


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}


function CarouselComponent() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };
    return (
        <div className="carousel2">

            <h2>Отзывы</h2>
            <Slider {...settings}>
                <div className="main-card">
                    <div className="card">
                        <img src={slid1} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                 </div>

                 <div className="main-card">
                    <div className="card">
                        <img src={slid2} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                </div>

                <div className="main-card">
                    <div className="card">
                        <img src={slid1} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                </div>

                <div className="main-card">
                    <div className="card">
                        <img src={slid2} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                </div>

                <div className="main-card">
                    <div className="card">
                        <img src={slid1} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                </div>

             </Slider>


        </div>
    );
}

export default CarouselComponent;