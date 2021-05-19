import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col} from 'react-bootstrap'

class Footer extends React.Component{
    render(){
      return (
          <Row>
            <Col style= {{ backgroundColor: "red" }}> <br/> </Col>
            <Col style= {{ backgroundColor: "blue" }}> <br/> </Col>
          </Row>
        )
    }

}

export default Footer;