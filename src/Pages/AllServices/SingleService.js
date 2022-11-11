import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const SingleService = ({ service }) => {
    const { name, photoURL, price, _id } = service;
    console.log(service);
    const desc = { test: 'f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?' }
    return (
        <div className="card card-compact my-6 bg-base-100 shadow-xl">
            <figure></figure>
            <PhotoProvider>
                <PhotoView src={photoURL}>
                    <img className='' src={photoURL} alt="Shoes" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className='font-bold'>price: ${price}</h3>
                <p>{desc.test}</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default SingleService;