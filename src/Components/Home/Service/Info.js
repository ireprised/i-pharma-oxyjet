import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Info = (props) => {
    const { name,imageURL,description} = props.service;
    return (
        <div>
            <Col >
                    <Card bg="dark" text="light" className="shadow-lg">
                        <Card.Img variant="top" src={imageURL} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                            {description}
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </Col>
        </div>
    );
};

export default Info;