import Navbarprivado from "../components/Navbarprivado";
import galeria from "../components/galeria.css"
import favoritos from "../components/favoritos.css"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cake1 from "../assets/img/cake1.jpg"


function Favoritos (){
    return(
        <div>
    <Navbarprivado/>
        <div className="container">
            
            
            <h1 className="mt-5 pt-5 text-center h1-gal">FAVORITOS</h1>
            <hr />
            <div className="card-gal">
                
            <div className=" col-md-4 col-xs-1">
                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cake1} />
                    <Card.Body className="colorcard">
                        <Card.Title><a href="/detalle" className="a-galeria">Torta de Rosas</a></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Title>$15.000</Card.Title>
                        <Button className="btn-color-fav">COMPRAR</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className=" col-md-4 col-xs-1">
                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cake1} />
                    <Card.Body className="colorcard">
                        <Card.Title><a href="/detalle" className="a-galeria">Torta de Rosas</a></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Title>$15.000</Card.Title>
                        <Button className="btn-color-fav">COMPRAR</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className=" mb-5 col-md-4 col-xs-1">
                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cake1} />
                    <Card.Body className="colorcard">
                        <Card.Title><a href="/detalle" className="a-galeria">Torta de Rosas</a></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Title>$15.000</Card.Title>
                        <Button className="btn-color-fav">COMPRAR</Button>
                    </Card.Body>
                </Card>
            </div>
 
            </div>
</div></div>
    )
}

export default Favoritos;