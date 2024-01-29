import './style.scss'
import Nav from "./Nav.jsx"
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
function Navigation() {
    const [burgerMenuOpened, setBurgerMenuOpened] = useState(false)
    return (
        <div>
            <header>
                <div className={burgerMenuOpened ? 'burger-menu-wrapper opened' : 'burger-menu-wrapper'}>
                    <div className="top"></div>
                    <div className="middle"></div>
                    <div className="bottom"></div>
                </div>
                <input
                    id='burger-menu-toggler'
                    type="checkbox"
                    onClick={(e) => { setBurgerMenuOpened(e.target.checked) }}
                />
                <Nav />
            </header>


            <div id='outlet'>
                <Outlet />
            </div>

        </div>



    );
}

export default Navigation;