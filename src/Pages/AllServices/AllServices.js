import React, { useEffect, useState } from 'react';

import SingleService from './SingleService';

const AllServices = () => {
    const [services, setServices] = useState([])
    console.log(services);
    useEffect(() => {
        fetch('http://localhost:4000/all-services')
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-8 my-8'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default AllServices;