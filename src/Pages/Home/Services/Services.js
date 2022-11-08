import React from 'react';

const Services = ({ service }) => {
    const { name, img, price } = service;
    const desc = { test: 'f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?' }
    console.log(service);

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desc.test.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Services;