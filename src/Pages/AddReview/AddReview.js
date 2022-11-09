import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col   my-6  shadow-2xl ">
                <form className=''>
                    <h1 className="text-4xl font-bold">Add Service</h1>

                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" name="name" placeholder="name" defaultValue={user?.displayName ? user.displayName : 'no name'} className="input input-bordered" required readOnly />
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
                                defaultValue={user.photoURL}
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