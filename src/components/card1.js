// codigo tomado de la pagina de Reacstrap
//  https://reactstrap.github.io/components/card/

// otra referencia:
//https://material-ui.com/components/grid-list/

import React from "react";
//import Figure from 'react-bootstrap/Figure';
import card1 from '../img/card1.png';
import card2 from '../img/card2.png';
import card3 from '../img/card3.png';
import './card.css';

const FiguresPage = () => {
  return ( 
    <div class="contenedor">
            <div class='cont1'>
            <img class="uno" src={card1}  width="100%" height="330px" alt="MSI Product Registration" />
            </div>
            <div class="cont2">
             <img class="dos" src={card2} width="100%" height="330px" alt="Product Registration" />
            </div>
            <div class="cont3">
              <img class="tres" src={card3} width="100%" height="330px" alt="Product Registration" />
            </div>
    </div>
  );
}

export default FiguresPage;

//Grid de react-boostrap

/*
const FiguresPage = () => {
  return (
    <Container>
  <Row>
    <Col xs={3} md={2}>
      <Image src={card1} width='550px' height='400px' rounded />
    </Col>
    <Col xs={3} md={2}>
      <Image src={card2} width='550px' height='400px' rounded />
    </Col>
    <Col xs={3} md={2}>
      <Image id='uno' src={card3} width='550px' height='400px'rounded />
    </Col>
  </Row>
</Container>
  );
}
export default FiguresPage;
//<div class='dos'><img src={card2}/></div>
//<div class='tres'><img src={card3}/></div>
*/


// Figuras

/*
const FiguresPage = () => {
  return (
    <figure id="car1">
      <Figure.Image
    
    width={550}
    height={400}
    alt="171x180"
    src={card1}
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
    </figure>
  );
}

export default FiguresPage;
*/
