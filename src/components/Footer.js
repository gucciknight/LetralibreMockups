import React from 'react'
import instalogo from '../images/instagram.png'
import facelogo from '../images/facebook.png'
import youtubelogo from '../images/youtube.png'
import whatsapplogo from '../images/whatsapp.png'
import twitterlogo from '../images/gorjeo.png'
import './styles/Footer.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col, Container} from 'react-bootstrap'
import { Image } from 'react-bootstrap'


class Footer extends React.Component{
    render(){
      return (
        <div>
            <div class="mt-5 pt-5 pb-5 footer">
                <Row>
                  <Col style= {{ backgroundColor: "red" }}> <br/> </Col>
                  <Col style= {{ backgroundColor: "blue" }}> <br/> </Col>
                </Row>
              <Container>
                <Row>
                  <Col sm={4} className="mt-5">
                    <br/>
                    <div class="d-flex align-items-center">
                      <Image className="logos" src={facelogo}></Image>
                      <Image className="logos" src={instalogo}></Image>
                      <Image className="logos" src={youtubelogo}></Image>
                      <Image className="logos" src={twitterlogo}></Image>
                      <Image className="logos" src={whatsapplogo}></Image>
                    </div>
                  </Col>
                  <Col className="links mt-5">
                    <a href="https://youtu.be/dQw4w9WgXcQ">LETRA LIBRE</a>
                    <br/><br/>
                    <a href="https://youtu.be/dQw4w9WgXcQ">NUESTRO PROYECTO</a>
                    <br/><br/>
                    <a href="https://youtu.be/dQw4w9WgXcQ">DONACIONES</a>
                  </Col>
                  <Col className="links mt-5">
                    <a href="https://youtu.be/dQw4w9WgXcQ">AYUDA</a>
                    <br/><br/>
                    <a href="https://youtu.be/dQw4w9WgXcQ">REPORTAR UN PROBLEMA</a>
                    <br/><br/>
                    <a href="https://youtu.be/dQw4w9WgXcQ">CONTACTO</a>
                  </Col>
                  <Col className="links mt-5">
                    <a href="https://youtu.be/dQw4w9WgXcQ">CONTACTO@LETRALIBRE.CL</a>
                  </Col>
                </Row>
              </Container>
            </div>


        </div>
        )
    }

}

export default Footer;