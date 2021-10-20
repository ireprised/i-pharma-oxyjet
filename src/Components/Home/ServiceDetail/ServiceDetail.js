import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ServiceDetail.css'


const ServiceDetail = (props) => {
    const { id,name,imageURL,description} = props.service;
    return (
        
        <div className="my-4">
            <Col className="service">
                    <Card bg="dark" text="light" className="shadow-lg">
                        <Card.Img  variant="top" src={imageURL} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                            {description}
                            </Card.Text>
                            <Link to={`/service/${id}`}><Button variant="info">Details</Button></Link>
                        </Card.Body>
                        </Card>
                    </Col>
        </div>
    );
};

export default ServiceDetail;