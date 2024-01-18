import Heading from "../common/Heading"
import { Link, useNavigate } from 'react-router-dom'

function Nav(props) {
    const navigate = useNavigate()
    return ( 
        <div className="nav-wrapper">
            <div className="logo">
                <h2>
                    <Link to={'/'}>
                        <Heading>
                            <img src="img1.png" alt="" />
                        </Heading>
                    </Link>
                </h2>
            </div>

            <div className="menu">
                <div className="nav-links">
                    
                    <Link to={'/about'}>
        
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default Nav;