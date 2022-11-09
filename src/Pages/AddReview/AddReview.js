import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext)

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
        }

        fetch('http://localhost:4000/reviews', {
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


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col   my-6  shadow-2xl ">
                <form onSubmit={handleAddReview} className=''>
                    <h1 className="text-4xl font-bold">Add Service</h1>

                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} readOnly required />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photoURL"
                                defaultValue={user?.photoURL}
                                readOnly
                                name="photoURL" placeholder="photoURL" className="input input-bordered" required />

                        </div>
                        <div className='form-control  mt-6'>
                            <textarea className="textarea textarea-accent w-96 h-48" name="textarea" placeholder="description" required></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Add Service" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddReview;