import Slider from "../components/Slider"
import Nosotros from "../views/Nosotros"
import Best from "../views/Best";
import Navbar from "../components/Navbar"

function Home(){
    return(
        <div>
            <Navbar/>
            <Slider/>
            <Nosotros />
            <Best/>
        </div>
    )
}

export default Home;