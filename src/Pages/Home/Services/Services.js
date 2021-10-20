import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
// import { ServicesContext } from '../../../contexts/ServicesProvider';
import Service from '../Service/Service';


const Services = () => {
    // const services = useContext(ServicesContext)
    // console.log(services)

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="p-5 ms-5 ">
            <h2 className="mb-5">Our Services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;