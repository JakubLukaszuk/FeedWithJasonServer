import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
function MainLayout(props) {
    const children = {props}
    return (
    <Container>
        <Row>
            <Col></Col>
            <Col xs={6}>{props.children}</Col>
            <Col></Col>
        </Row>
    </Container>
    )
}

export default MainLayout