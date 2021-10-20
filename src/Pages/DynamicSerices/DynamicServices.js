import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import DynamicService from './DynamicService/DynamicService';


const DynamicServices = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);

    useEffect(() => {
        console.log("inside useEffect")
        fetch('services.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
            .catch(error => console.log("Error reading data" + error))
    }, [])

    console.log(services, serviceId)

    // const service = services.find(({ id }) => id === serviceId)
    // console.log(service.id, service.title)

    // for (const service of services) {
    //     if (service.id === serviceId) {
    //         console.log(service)
    //         return (
    //             <DynamicService
    //                 service={service}
    //             ></DynamicService>
    //         )
    //     }
    // }

    return (
        <div>
            <h2>This is </h2>
            {
                // services.filter(sv => sv.id === serviceId).map(service => <DynamicService
                //     key={service.id}
                //     service={service}></DynamicService>)

                <DynamicService service={services.find(({ id }) => id === serviceId)}></DynamicService>

            }
        </div>
    );
};

export default DynamicServices;