import { Link, useNavigate } from 'react-router-dom';
import Heading from '../common/Heading';


import Heading2 from '../Heading2';

import Icon1 from '../../assets/icons/footerIcons/footer1.png'
import Icon2 from '../../assets/icons/footerIcons/footer2.png'
import Icon3 from '../../assets/icons/footerIcons/footer3.png'
import Icon4 from '../../assets/icons/footerIcons/footer4.png'
import FooterFace from '../../assets/icons/footerIcons/footerFace.png'
import FooterInst from '../../assets/icons/footerIcons/footerIns.png'
import FooterVk from '../../assets/icons/footerIcons/footerVk.png'


function Item(props) {

    const navigate = useNavigate()

    const goToTeamsHash = () => {
        navigate('/about')

    }

    return (
        <main>
            <div className="nav-wrapper2">
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
                    <h2>НАШИ ЭКСКУРСИИ</h2>
                </div>
            </div>



 

        </main>
    );
}

export default Item;