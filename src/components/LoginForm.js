import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import imglogo from '../images/logoletralibre.png'
import './styles/LoginForm.scss'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

class LoginForm extends React.Component{

    state={}

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClick = e => {
        console.log("the button was clicked")
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("form was submitted")
        console.log(this.state)

    };

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
                            <Form onSubmit={this.handleSubmit} className="m-5">
                                <Form.Group className="mb-4">
                                    <Form.Label className="formLabels">
                                        Nombre de Usuario
                                    </Form.Label>
                                    <Form.Control onChange={this.handleChange} name="email" className="inputs" type="email" placeholder="PEDROPABLO" value={this.state.email}/>
                                    <Form.Label className="formLabels mt-3">
                                        Contraseña
                                    </Form.Label>
                                    <Form.Control onChange={this.handleChange} name="password" className="inputs" type="password" placeholder="************" value={this.state.password} />
                                <Row>
                                    <Col/>
                                    <Col className="d-grid gap-2 d-md-flex justify-content-md-end mt-3" style={{color: "white"}}>
                                            <Button onClick={this.handleClick} type="submit" className="text-reset" variant="warning">INGRESAR</Button>
                                    </Col>
                                </Row>
                                </Form.Group>
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