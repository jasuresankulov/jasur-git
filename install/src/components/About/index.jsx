import "./style.scss"
import aboutImg from "../../assets/images/aboutBackImg.png";
import TravelBlog from "./TravelBlog";
import Values from "./Values";
 
function About() {
         return (

                <div className="about-wrapper">

                 








                        <div className="about-back-img">
                         <div className="about-desc">
                                <h2>About Us</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, quia voluptatibus eos blanditiis ex eum est. Modi minima dolore nostrum neque officiis odio saepe, vel tenetur autem perspiciatis. Temporibus, totam!</p>
                        </div>
                        </div>


                        <div className="values">
                                <Values/>
                        </div>
                        <div className="travel-blog">
                                <TravelBlog />
                        </div>
                </div>

        );
}

export default About;