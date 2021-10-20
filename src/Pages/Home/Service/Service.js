import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, title, description, img } = props.service;
    return (
        <Col >
            <Card style={{ width: '18rem', height: "100%" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/services/${id}`}><Button variant="primary">Read More</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;