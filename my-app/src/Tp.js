import React from "react";
import Description  from "./Description"
import Name from "./Name";
import Price from "./Price";
import Image from "./Image";
import { Navbar, Container, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div >
      <Navbar expand="lg" bg="primary" className="dark">
        <Container>
          <Navbar.Brand href="#"> GMC Product</Navbar.Brand>
        </Container>
      </Navbar>

      <Card bg="" >
        <Card.Body>
          <Name />
          <Description />
          <Image />
          <Price />
        </Card.Body>
      </Card>
    </div>
  );
}
export default App;
