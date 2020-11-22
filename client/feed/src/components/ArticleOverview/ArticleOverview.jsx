import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ArticleOverview = (props) => {
    const {date, excerpt, thumb, title, url} = props;
    const diffTime = Math.abs(new Date() - new Date(date));
    const diffHours = diffTime / (1000 * 60 * 60);
    console.log(date);
    return (
        <Card border="dark" style={{ width: '21rem', height: '34rem' }}>
            <Card.Img variant="top" src={thumb} height={200}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {excerpt}
                </Card.Text>
                <Card.Text> {diffHours < 48 && diffHours > 24 ? "Dodano Wczoraj":
                 diffHours >= 48 ? `Dodano ${Math.ceil(diffHours/24)} dniTemu` :
                 diffHours > 1 ? `Dodano ${Math.ceil(diffHours)} godzin temu`:
                 diffHours <= 1 ? `Dodano ${Math.ceil(diffHours*60)} minut(ę) temu` :
                ""}</Card.Text>
                <Card.Link href={url}>Czytaj dalej</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ArticleOverview;
