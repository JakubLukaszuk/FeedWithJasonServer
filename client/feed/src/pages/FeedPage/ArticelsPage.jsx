import React from 'react';
import Feed from '../../components/Feed/ArticlesFeed';
import {Container, Row,Col} from 'react-bootstrap';

const FeedPage = () => {
    return (
    <Container fluid="md">
        <Row style={{marginTop: '10px'}}>
            <Col style={{display: 'flex', justifyContent: 'center'}}>
                <Feed/>
            </Col>
        </Row>
    </Container>
    )
}

export default FeedPage
