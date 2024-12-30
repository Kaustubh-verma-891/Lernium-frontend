import { Outlet } from 'react-router-dom'
import NavBar from '../../components/landingComponents/NavBar'
import Footer from '../../components/landingComponents/Footer'

function LandingLayout() {
    return (<>
        <NavBar />
        <Outlet />
        <Footer />
    </>)
}

export default LandingLayout