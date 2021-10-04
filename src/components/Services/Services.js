import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./eduweb.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">
            <h3 className="text-center text-primary fw-bold border-bottom border-primary p-4">All WebDev Courses with Details</h3>
            <div className="row row-cols-2 row-cols-md-3 m-2 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;