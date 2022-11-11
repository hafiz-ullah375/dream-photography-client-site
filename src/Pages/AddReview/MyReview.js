import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useHelmet from '../../Shared/Helmet/Helmet';
import Review from './Review';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useHelmet('myReview')
    useEffect(() => {
        fetch(`http://localhost:4000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setReviews(data.data)
            })
    }, [user?.email])

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data => {
                if (data.deletedCount > 0) {
                    toast.success('delete success')
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining)
                }
            }))

    }

    return (
        <div>

            <div className=" w-full">
                <table className="table w-full ">


                    <tbody className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-8 my-8'>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></Review>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;