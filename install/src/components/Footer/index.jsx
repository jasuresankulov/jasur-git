import './style.scss'
import React, { Link } from 'react-router-dom'
import Heading2 from '../Heading2';
import ColorLogo from '../../assets/images/logoColor.png'
import Icon1 from '../../assets/icons/footerIcons/footer1.png'
import Icon2 from '../../assets/icons/footerIcons/footer2.png'
import Icon3 from '../../assets/icons/footerIcons/footer3.png'
import Icon4 from '../../assets/icons/footerIcons/footer4.png'
import FooterFace from '../../assets/icons/footerIcons/footerFace.png'
import FooterInst from '../../assets/icons/footerIcons/footerIns.png'
import FooterVk from '../../assets/icons/footerIcons/footerVk.png'


function Footer() {
    return (
        <div className='footer-wrapper'>
        <div className="footer-content-1">
            <Link path={'/about'}>
                <img src={ColorLogo} alt="" />
            </Link>
        </div>
        <div className="footer-content-2">
            <Link to='/about'>
                Главная
            </Link>
            <br />
            <Link to={'/blog'}>
                Экскурсия
            </Link>
            <br />
            <Link to={'/'}>
                Личный кабинет
            </Link>
        </div>
        <div className="footer-content-3">
            <Link>
            <div>
                <img src={Icon1} alt="" />
                <span>+7 964 944 18 74</span>
            </div>
            </Link>

            <Link>
            <div>
                <img src={Icon2} alt="" />
                <span>+7 964 944 18 74</span>
            </div>
            </Link>
            <Link>
            <div>
                <img src={Icon3} alt="" />
                <span>+7 964 944 18 74</span>
            </div>
            </Link>
            <Link>
            <div>
                <img src={Icon4} alt="" />
                <span>Telegram bot PERO-TRAVEL</span>
            </div>
            </Link>
        </div>
        <div className="footer-content-4">
            <span>
                <img src={Icon4} alt="" />
                office@perotravel.com
            </span>
            <div className="social-media">
                <img className='img-1' src={FooterVk} alt="" />
                <img className='img-2' src={FooterInst} alt="" />
                <img className='img-3' src={FooterFace} alt="" />
            </div>

        </div>
    </div>
        );
}

export default Footer;