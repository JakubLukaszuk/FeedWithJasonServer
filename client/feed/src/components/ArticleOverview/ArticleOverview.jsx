import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ArticleOverview = (props) => {
    const {date, excerpt, thumb, title, url} = props;
    return (
        <Card>
            <Card.Img variant="top" src={thumb} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {excerpt}
                    {date}
                </Card.Text>
                 <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default ArticleOverview;
