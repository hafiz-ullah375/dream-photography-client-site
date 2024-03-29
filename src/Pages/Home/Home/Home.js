import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../HeaderSection/HeaderSection';
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://assignment-11-server-pearl.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [])
    return (
        <>
            <HeaderSection></HeaderSection>
            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-8 my-8'>
                    {
                        services.map(service => <Services
                            key={service._id}
                            service={service}
                        ></Services>
                        )
                    }
                </div>
                <div className='text-center' >
                    <Link to='/allservices'>
                        <button className="btn btn-primary ">See All Services</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;