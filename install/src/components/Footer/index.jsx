import './style.scss'
import React, { Link } from 'react-router-dom'
import Heading2 from '../Heading2';

import Icon1 from '../../assets/icons/footerIcons/footer1.png'
import Icon2 from '../../assets/icons/footerIcons/footer2.png'
import Icon3 from '../../assets/icons/footerIcons/footer3.png'
import Icon4 from '../../assets/icons/footerIcons/footer4.png'
import FooterFace from '../../assets/icons/footerIcons/footerFace.png'
import FooterInst from '../../assets/icons/footerIcons/footerIns.png'
import FooterVk from '../../assets/icons/footerIcons/footerVk.png'


function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <div className="footer-heading">
                    <Link path={'/about'} >
                        <Heading2></Heading2>

                    </Link>
                </div>

                <div className="footer-links">
                    <div className="left">
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


                    <div className="right">
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
                                <span>Телеграм-бот PeroTravel</span>
                            </div>
                        </Link>



                    </div>

                    <div className="twodiv">
                        <Link>
                            <div>
                                <img src={Icon4} alt="" />
                                <span>office@perotravel.ru</span>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <img src={FooterVk} alt="" />
                                <img src={FooterInst} alt="" />
                                <img src={FooterFace} alt="" />
                            </div>
                        </Link>

                    </div>

                </div>



            </div>

        </div>
    );
}

export default Footer;