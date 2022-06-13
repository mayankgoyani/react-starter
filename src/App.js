
import './App.css';
import Heading from './Heading';
import Cards from './Cards';
import db from './db/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';




const heading = (data) => {
  return (
    <Cards
      img={data.images}
      name={data.name}
      desc={data.description}
      price={data.price}
    />
  );
}

function App() {

  return (
    <>
      <Heading />
      <Container>
        <Row>
          {db.map(heading)}
        </Row>
      </Container>

    </>
  );
}

export default App;
