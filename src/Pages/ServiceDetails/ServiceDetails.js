import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { data } = useLoaderData()
    console.log(data);
    const { name, img, price, ratings } = data;
    const desc = { test: 'f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?' }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-4/5 lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-4">Price: ${price}</p>
                    <p className="py-2">{desc.test}</p>
                    <p className="py-2">Rating: {ratings}</p>


                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;