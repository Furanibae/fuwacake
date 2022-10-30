import sesion from "../components/sesion.css"
import Navbar from "../components/Navbar"
function Sesion(){
    return(
        <div>
        <Navbar/>
        <div className="container">
        <div className="col-xs-1 col-md-4 pt-5 containerreg">
        
        <h1 className="h1reg">INICIAR SESIÓN</h1>
        <input type="email" placeholder="Ingresa tu e-mail" className="form-control" />
        <input type="password" placeholder="Contraseña" className="form-control"/>
        <a href="#" className="olvcontr">¿Olvidaste tu contraseña?</a>
        <a className="btn btn-color btn-reg mt-2" href="/perfil">Ingresar</a>
        </div>
    </div></div>
    )
}

export default Sesion;