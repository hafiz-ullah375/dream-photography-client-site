import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewByProduct from '../AddReview/ReviewByProduct';


const ServiceDetails = () => {
    const { data } = useLoaderData()
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext);

    console.log(reviews);
    const { name, photoURL, price, ratings, _id } = data;




    const handleAddReview = event => {

        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const textarea = form.textarea.value;

        const addReview = {
            name,
            email,
            photoURL,
            textarea,
            serviceId: _id,
        }
        console.log(addReview);
        fetch('https://assignment-11-server-pearl.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Your Review is Success.')
                }
            })
            .catch(error => console.log(error))

    }
    useEffect(() => {
        fetch('https://assignment-11-server-pearl.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {

                const reviewData = data.data.filter(rev => rev.serviceId === _id)
                setReviews(reviewData)

            })
    }, [])


    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-4/5 lg:flex-row">
                    <img src={photoURL} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-4">Price: ${price}</p>
                        <p className="py-2">{''}</p>
                        <p className="py-2">Rating: {ratings}</p>


                    </div>
                </div>
            </div>

            <div>

                <div className='text-center mt-4'>

                    <h1 className='text-2xl '>all reviews</h1>

                </div>
                <div className="hero-content flex-col     shadow-2xl ">
                    {user ? <form onSubmit={handleAddReview} className=''>

                        <Toaster />
                        <div>
                            <div className="form-control hidden">

                                <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required readOnly />
                            </div>
                            <div className="form-control hidden">

                                <input type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} readOnly required />
                            </div>

                        </div>
                        <div>
                            <div className="form-control hidden">

                                <input type="photoURL"
                                    defaultValue={user?.photoURL}
                                    readOnly
                                    name="photoURL" placeholder="photoURL" className="input input-bordered" required />

                            </div>
                            <div className='form-control  mt-6'>
                                <textarea className="textarea textarea-accent w-96 h-32" name="textarea" placeholder="description" required></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Add Review" />
                        </div>

                    </form>
                        : <Link to="/login">add review</Link>}
                </div>


            </div>
            <div className=" w-full">
                <table className="table w-full ">


                    <tbody className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-8 my-8'>
                        {
                            reviews.map(review => <ReviewByProduct

                                review={review}
                            ></ReviewByProduct>)
                        }
                    </tbody>
                </table>
            </div>


        </>
    );
};

export default ServiceDetails;