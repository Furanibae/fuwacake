import registro from "../components/registro.css"
import Navbar from "../components/Navbar"
function Registro(){
    return(
    <div>
    <Navbar/>
        <div className="col-md-4 pt-5 containerreg">
            
            <h1 className="h1reg">REGISTRO</h1>
            <input type="email" placeholder="Ingresa tu e-mail" className="form-control" />
            <input type="text" placeholder="Nombre y apellido" className="form-control"/>
            <input type="password" placeholder="Contraseña" className="form-control"/>
            <input type="password" placeholder="Repite contraseña" className="form-control" />
            <button className="btn btn-color btn-reg">Registrarse</button>
        </div></div>
    )
}

export default Registro;