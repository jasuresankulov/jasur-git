import { Link, useNavigate} from 'react-router-dom';
import Heading from '../common/Heading';
 

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