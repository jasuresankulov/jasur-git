import { Link, useNavigate } from 'react-router-dom';
import Heading from '../common/Heading';
import wK1 from '../../assets/icons/Wk.png';
import inSt1 from '../../assets/icons/inst1.png';
import fAcebook1 from '../../assets/icons/facebook1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';
function Nav(props) {
    const navigate = useNavigate()



    const goToTeamsHash = () => {
        navigate('/about')

    }
    return (
        <div className="nav-wrapper">

            <div className="logo">
                <h2>
                    <Link to={'/'}>
                        <Heading></Heading>
                    </Link>
                </h2>
            </div>

            <div className="menu">
                <div className="nav-links">

                    <Link to='/'>
                        Главная
                    </Link>
                    <Link onClick={goToTeamsHash} to={'/blog'}>
                        Экскурсия
                    </Link>
                    <Link to={'/contact'}>
                        Личный кабинет
                    </Link>
                </div>

              

            </div>


            <div className="travel-text">
                <h2>ПУТЕШЕСТВУЙ</h2>
                <span className='vmeste'>вместе с</span>
                <h1>Pero travel</h1>
            </div>
            
            <Link to={'./blog'}>
            <button className='info-btn'>
                К экскурсиям
            </button>
            </Link>
        

            <div className="icons">
                <Link to={'/'}>
                    <img className='ic1' src={wK1} alt="" />
                </Link>
                <Link to={'/'}>
                    <img className='ic2' src={inSt1} alt="" />
                </Link>
                <Link to={'/'}>
                    <img className='ic3' src={fAcebook1} alt="" />
                </Link>
            </div>


            <div className="second-images">
                    <img className='img2' src={Img2} alt="" />
                    <img className='img3' src={Img3} alt="" />
                </div>
        </div>
    );
}

export default Nav;