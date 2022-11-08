import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { name, img, price, _id } = service;
    console.log(service);
    const desc = { test: 'f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?' }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className='font-bold'>price: ${price}</h3>
                <p>{desc.test.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;