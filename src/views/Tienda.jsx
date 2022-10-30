import Navbarprivado from "../components/Navbarprivado"
import tienda from "../components/tienda.css"
import cake2 from "../assets/img/cake2.jpg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Tienda(){
    return(
      <div><Navbarprivado/>
        <div className="container container-tienda mt-5 pt-5">
            

            <div className="col-md-12 pt-5">
                        <h1 className="h1-tienda text-center">TIENDA</h1>
                        <hr />
                    </div>
            <div className="row">
            <div className="col-md-5 row-busqueda mt-5 pt-5">
                
                <input className="form-control buscar mt-2" type="search" />
                <button className="btn btn-color">Buscar</button>
            </div>
            </div>



           <div className="row">
          

              
               <div className="col-md-4 tortas">
                 <a href="">Todas</a>
                <a href="">Tortas Express</a>
                <a href="">Tortas Especiales</a>
                <a href="">Tortas Base Bizcocho</a>
                <a href="">Tortas Base Panqueque</a>
                <a href="">Tortas Base Hojarasca</a>
                <a href="">Tortas Base Milhojas</a>

            </div>
            <div className="cards col-md-4">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cake2} />
      <Card.Body>
        <Card.Title>Torta de Rosas</Card.Title>
        <Card.Text>
            Torta con diseño de rosas y bizcocho relleno.
        </Card.Text>
        <Card.Title>$15.000</Card.Title>
        <Button variant="btn btn-color">COMPRAR</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cake2} />
      <Card.Body>
        <Card.Title>Torta de Rosas</Card.Title>
        <Card.Text>
        Torta con diseño de rosas y bizcocho relleno.
        </Card.Text>
        <Card.Title>$15.000</Card.Title>
        <Button variant="btn btn-color">COMPRAR</Button>
      </Card.Body>
        </Card>
        </div>

<div className="row row-tienda">
<div className="cards col-md-4">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cake2} />
      <Card.Body>
        <Card.Title>Torta de Rosas</Card.Title>
        <Card.Text>
        Torta con diseño de rosas y bizcocho relleno.
        </Card.Text>
        <Card.Title>$15.000</Card.Title>
        <Button variant="btn btn-color">COMPRAR</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cake2} />
      <Card.Body>
        <Card.Title>Torta de Rosas</Card.Title>
        <Card.Text>
        Torta con diseño de rosas y bizcocho relleno.
        </Card.Text>
        <Card.Title>$15.000</Card.Title>
        <Button variant="btn btn-color">COMPRAR</Button>
      </Card.Body>
        </Card>
        </div>
</div>
</div>
            </div>
            </div>

    )
}

export default Tienda;