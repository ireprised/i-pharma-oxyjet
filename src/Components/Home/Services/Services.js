import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h2 className="my-4 text-center">Our Services</h2>
            <Row xs={2} md={3} className="g-4 px-4 w-75 mx-auto">
                    
                    {
                        services.map(service => <ServiceDetail key={service.id} service={service}></ServiceDetail>)
                    }
                    
                    
                    
            </Row>
        </div>
    );
};

export default Services;