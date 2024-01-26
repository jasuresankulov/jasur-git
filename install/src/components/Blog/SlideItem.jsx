import slid1 from '../../../assets/images/slides/slide1.png';
import slid2 from '../../../assets/images/slides/slide2.png';




function SlideItem() {
    return (
        <div className="slides-wrapper">
           
                <div className="first-slide">
                    <img src={slid1} width={245} height={245} />
                    <b>Иван Иванов, 25 лет</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id voluptatum cum reprehenderit vel alias dolorem, exercitationem vitae similique blanditiis esse eveniet aut quia ut beatae deserunt cupiditate quod recusandae!</p>
                </div>
                <div className="second-slide">
                    <img src={slid2} width={245} height={245} />
                    <b>Иван Иванов, 25 лет</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id voluptatum cum reprehenderit vel alias dolorem, exercitationem vitae similique blanditiis esse eveniet aut quia ut beatae deserunt cupiditate quod recusandae!</p>
                </div>
         </div>
    );
}

export default SlideItem;