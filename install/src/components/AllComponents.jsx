import { useLocation, Route, Routes } from 'react-router-dom';
import Navigation from "./Navigation"
import About from "./About";
import Blog from "./Blog";
import Third from './Third-page';
function AllComponents(props) {
    const location = useLocation()
    return (
        <>

            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<About />} />
                    <Route path='/about' element={<About />} />
                </Route>

                <Route path='/blog' element={<Blog />} />
                <Route path='/third' element={<Third />} />


            </Routes>


        </>
    );
}

export default AllComponents;