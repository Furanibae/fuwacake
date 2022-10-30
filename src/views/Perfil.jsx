import perfil from "../components/perfil.css"
import Navbarprivado from "../components/Navbarprivado"

function Perfil (){
    return(
        <div>
        <Navbarprivado/>
        <div className="perfil mx-5 pt-5 mt-5 pb-5">
            
            <h5 className="mt-5">Perfil</h5>
            <hr/>
            <p><strong>USUARIO</strong></p>
            <p>Juan Perez</p>
            <p><strong>E-MAIL</strong></p>
            <p>emaildejuan@gmail.com</p>
            <a href="/galeria" className=" mt-3 btn btn-color btn-perf">MIS PUBLICACIONES</a>
            <a href="/favoritos" className=" mt-3 btn btn-color mx-2">MIS FAVORITOS</a>
            </div>
        </div>
    )
}

export default Perfil;