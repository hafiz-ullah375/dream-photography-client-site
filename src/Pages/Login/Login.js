import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => console.error(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  w-4/5 my-6 lg:flex-row-reverse">
                <div>

                    <img className='' src="https://media.istockphoto.com/id/1332268917/vector/personal-data-protection-isometric-landing-page.jpg?s=1024x1024&w=is&k=20&c=swKrjjeLhPjdbMZWY3JFc-HndmAek3JjuFqyZVP2ukU=" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl font-bold">Login</h1>
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
                            <span className='label'>new to create account Please?  <Link to="/register" href="#" className="label-text-alt link link-hover text-lg text-primary"> Register </Link></span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;