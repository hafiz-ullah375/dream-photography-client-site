import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useHelmet from '../../Shared/Helmet/Helmet';



import SingleService from './SingleService';

const AllServices = () => {
    const [services, setServices] = useState([])
    const { loading, setLoading } = useContext(AuthContext)
    console.log(services);
    useHelmet('allServices');
    useEffect(() => {

        fetch('https://assignment-11-server-pearl.vercel.app/all-services')
            .then(res => res.json())
            .then(data => {
                if (loading) {
                    return <h1>loading...</h1>
                }
                setServices(data.data)
            }
            )
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