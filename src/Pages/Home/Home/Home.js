import React, { useEffect, useState } from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([])
    console.log(services);
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [])
    return (
        <>
            <HeaderSection></HeaderSection>
            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-8 my-8'>
                    {
                        services.slice(0, 3).map(service => <Services
                            key={service._id}
                            service={service}
                        ></Services>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;