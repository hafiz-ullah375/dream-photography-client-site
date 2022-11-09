import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddServices = () => {

    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const textarea = form.textarea.value;

        const addService = {
            name,
            price,
            photoURL,
            textarea,
        }

        fetch('http://localhost:4000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Here is your toast.')
                }
            })
            .catch(error => console.log(error))

    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col   my-6  shadow-2xl ">
                <form onSubmit={handleAddService} className=''>
                    <h1 className="text-4xl font-bold">Add Service</h1>
                    <Toaster />
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name of Service</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photoURL"

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

export default AddServices;