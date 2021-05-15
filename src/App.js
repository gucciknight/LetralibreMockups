import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Col, Form, Row, Button, Container} from 'react-bootstrap/'


function App() {
  return (
    <div className="App">
      
      <Row>
        <Col className="red-background">
          <br/>
        </Col>
        <Col className="blue-background">
          <br/>
        </Col>
      </Row>
      <Container fluid>
      <Card className="m-5">
          <Card.Header>
            <h1>
              Bienvenido al portal de Letra Libre
            </h1>
          </Card.Header>
          <Card.Body>
            <Form>  
              <Row>
                <Col className="col-5">
                  <Form.Group>
                    <Form.Label>Correo / Usuario</Form.Label>
                    <Form.Control type="email" placeholder="Ejemplo@Ejemplo.com"/>
                    <Form.Text className="text-muted">
                      Uso exclusivo para tutores
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col className="col-5">
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="***********"/>
                  </Form.Group>
                </Col>
                <Col className="col-2">
                  <Button type="submit" className="btn-outline-primary bg-light mt-4">
                    Ingresar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Row>
      <Col className="orange-background">
          <br/>
        </Col>
        <Col className="yellow-background">
          <br/>
        </Col>
      </Row>
        
        
    
    </div>
  );
}

export default App;
