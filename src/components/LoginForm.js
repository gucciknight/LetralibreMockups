import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import imglogo from '../images/logoletralibre.png'
import './styles/LoginForm.css'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

class LoginForm extends React.Component{
    render(){
        return(
            
            <Row>
                <Col/>
                <Col className="m-5">
                    <Container className="contenedor">
                        <br/>
                        <Card className="carta">
                            <Card.Img className="logo rounded mx-auto d-block" src={imglogo}/>
                            <br/>
                            <Card.Title className="text-end intranet fs-6">Intranet Tutores</Card.Title>
                            <Form className="m-5">
                                <Form.Group className="mb-4">
                                    <Form.Label className="formLabels">
                                        Nombre de Usuario
                                    </Form.Label>
                                    <Form.Control className="inputs" type="email" placeholder="PEDROPABLO"/>
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label className="formLabels">
                                        Contraseña
                                    </Form.Label>
                                    <Form.Control  className="inputs" type="password" placeholder="************"/>
                                </Form.Group>
                                <Row>
                                    <Col/>
                                    <Col className="d-grid gap-2 d-md-flex justify-content-md-end" style={{color: "white"}}>
                                            <Button className="text-reset" variant="warning">INGRESAR</Button>
                                    </Col>
                                </Row>
                                
                            </Form>
                        </Card>
                    </Container>
                </Col>
                <Col/>
            </Row>
        )
    }
}

export default LoginForm