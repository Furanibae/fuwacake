import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home"
import Nosotros from "./views/Nosotros"
import Best from "./views/Best"
import Tienda from "./views/Tienda"
import Registro from "./views/Registro"
import Sesion from "./views/Sesion"
import Perfil from "./views/Perfil"
import Detalle from "./views/Detalle"
import Favoritos from "./views/Favoritos"
import Galeria from "./views/Galeria"
import Crear from "./views/Crear"


function App() {
  return (
    <div className="App">
          <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/best" element={<Best />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/sesion" element={<Sesion />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/detalle" element={<Detalle/>} />
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="/galeria" element={<Galeria/>} />
          <Route path="/crear" element={<Crear/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>



  );
}

export default App;
