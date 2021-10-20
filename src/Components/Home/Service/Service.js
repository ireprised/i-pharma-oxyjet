import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';


const Service = () => {
    const [services,setServices] = useState([])
    const {serviceID} = useParams();

    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const findService = services?.find(service => parseInt(service.id) === parseInt(serviceID))
    console.log(findService?.imageURL)

    return (
        <div>
            
        
            <Row className="m-4">
                <Col >
                    <Card bg="dark" text="light" className="shadow-lg">
                    <Card.Title className="text-center py-2">{findService?.name}</Card.Title>
                        <Card.Img variant="top" src={findService?.img} />
                        <Card.Body>
                            <Card.Title> price : ${findService?.price}</Card.Title>
                            <Card.Text>
                                {findService?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Service;