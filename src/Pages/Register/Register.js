import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                handleUpdateUserInfo(name, photoURL)
            })
            .catch(error => console.error(error))

    }

    const handleUpdateUserInfo = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserInfo(profile)
            .then(result => {
                const user = result.user;
                console.log(user);

                handleUpdateUserInfo(name, photoURL)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-screen bg-base-200">
            <div className="hero-content flex-col w-4/5 lg:flex-row-reverse">
                <div>

                    <img className='' src="https://media.istockphoto.com/id/1332268917/vector/personal-data-protection-isometric-landing-page.jpg?s=1024x1024&w=is&k=20&c=swKrjjeLhPjdbMZWY3JFc-HndmAek3JjuFqyZVP2ukU=" alt="" />
                </div>
                <div className="card  w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-4xl font-bold">Register</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="photoURL" name="photoURL" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                        <label className="label">
                            <span className='label'>if you have an account Please?  <Link to="/login" href="#" className="label-text-alt link link-hover text-lg text-primary"> Login </Link></span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;