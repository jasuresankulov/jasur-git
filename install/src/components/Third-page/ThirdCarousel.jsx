import './style.scss'
import ThirdCarouselImg1 from '../../assets/thridImages/thirdcarouselImg1.png'
import ThirdCarouselImg2 from '../../assets/thridImages/thirdcarouselImg2.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ThirdCarousel() {

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
        <>
            <Carousel responsive={responsive}>
                <div className="img">
                    <img src={ThirdCarouselImg1} alt="" />
                    <img src={ThirdCarouselImg2} alt="" />
                    <img src={ThirdCarouselImg1} alt="" />
                    <img src={ThirdCarouselImg2} alt="" />
                </div>
            </Carousel>

        </>
    );
}

export default ThirdCarousel;