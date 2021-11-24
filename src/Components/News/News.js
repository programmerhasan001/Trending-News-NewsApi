import React from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './News.css'

const News = (props) => {
    const { title, description, urlToImage } = props.news;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={urlToImage} className />
                <Card.Body>
                    <Card.Title className="title">{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;