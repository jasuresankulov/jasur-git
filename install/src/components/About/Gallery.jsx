import './style.scss';
import './galleryStyle.scss';
import gallery1 from '../../assets/images/gallery/1.png'
import gallery2 from '../../assets/images/gallery/2.png'
import gallery3 from '../../assets/images/gallery/3.png'
import gallery4 from '../../assets/images/gallery/4.png'
import gallery5 from '../../assets/images/gallery/5.png'
import gallery6 from '../../assets/images/gallery/6.png'
import gallery7 from '../../assets/images/gallery/7.png'
import gallery8 from '../../assets/images/gallery/8.png'

 

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Link } from 'react-router-dom';

  



function Gallery() {

 
 //=========================================================================================
    const images = [
        gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8
    ]
    return (
        <div className="gallery">

            <h2>Галерея</h2>
            <span><Link to={'/'}>Смотреть все</Link></span>

            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", height: "70%", display: "block", padding: "8px" }}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>


 
         </div>
    );
}

export default Gallery;