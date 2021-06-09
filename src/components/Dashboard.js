import React from 'react'
import logoLetralibre from '../images/logoletralibre.png'
import './styles/Dashboard.scss'
import { Button, Col, Container, Row } from 'react-bootstrap'

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Row className="h-100">
                    <Col sm={4}>
                        <Container fluid className="sideContainer" style={{alignItems: 'center'}}>
                            <img src={logoLetralibre} alt="Logo" className="logo"/>
                            <div className="sideButtons m-2">
                            <Button className="buttons m-2" variant="warning" style={{color: "white"}}>ESTUDIANTE</Button><br/>
                            <Button className="buttons m-2" variant="warning" style={{color: "white"}}>MI PERFIL</Button><br/>
                            <Button className="buttons m-2" variant="warning" style={{color: "white"}}>NOTICIAS</Button><br/>
                            <Button className="buttons m-2" variant="warning" style={{color: "white"}}>REPORTE SEMANAL</Button><br/>
                            <Button className="buttons m-2" variant="warning" style={{color: "white"}}>CÁPSULA</Button><br/>
                            <Button className="buttons m-2" variant="warning" style={{color: "white"}}>EVALUACIONES</Button><br/>
                            <Button className="buttons m-2" variant="warning" style={{color: "white"}}>MATERIAL DE CLASES</Button><br/>
                            <Button className="buttons m-2" variant="warning" style={{color: "white"}}>DOCUMENTACIÓN</Button><br/>
                            </div>
                        </Container>
                    </Col>
                    <Col sm={8}>
                        <Container>
                            <div>

                            </div>
                            <Container fluid className="mainContainer">
                                <img alt="icono"/>
                                <p></p>
                                <p></p>
                                <p></p>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Dashboard;