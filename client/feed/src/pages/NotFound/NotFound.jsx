import React from 'react'
import {HOME} from '../../constants/routes';
import {Container, Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const NotFound = () => {
    return (
    <Container fluid="md">
        <Row>
        <Col style={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <span>Błąd 404. Strony nie zaleziono</span>
            <div style={{borderTop: '3px solid #bbb', borderRadius: '4px'}}/>
            <Link to={HOME}>
                Powórt na stronę główną
            </Link>
            </Col>
        </Row>
    </Container>

    )
}

export default NotFound
