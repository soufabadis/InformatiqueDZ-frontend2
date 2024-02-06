import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import { useForm } from 'react-hook-form';
import Meta from "../components/Meta";
import "../styles/login.css";
import { Link } from 'react-router-dom';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate an asynchronous signup request (replace with your actual signup logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check signup credentials (replace with your actual validation logic)
    if (data.username === 'demo' && data.password === 'demo') {
      console.log('Signup successful');
    } else {
      // Set an error if signup fails
      alert('Invalid credentials');
    }
  };

  return (
    <main>
      <Meta title="Signup"></Meta>
      <div className="Signup-wrapper  home-wrapper-2 ">
        <div className="container-fluid">
          <form className="mx-auto login-form" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-center title">Sign up</h4>
            <div className="mb-3 mt-5">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder='Enter Username'
                {...register('username', { required: 'Username is required' })}
              />
              {errors.username && <span className="text-danger">{errors.username.message}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder='Enter email'
                {...register('email', { required: 'email is required' })}
              />
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder='Enter Password'
                id="password"
                {...register('password', { required: 'Password is required' })}
              />
            
            </div>
            <div className="mb-3">
              <label htmlFor="repeatpassword" className="form-label">
                Repeat password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder='Enter Password'
                id="repeat-password"
                {...register('repeat-password', { required: 'password" is required' })}
              />
            
            </div>
            <div id="emailHelp" className="form-text mt-3 mb-3">
            <Link to="/Forgotpassword"> Forgot password?</Link>

              </div>
            <div className='d-flex gap-3'>
              <button type="submit" className="Signup-button btn text-white">
                Sign up
              </button>
              <button type="button" className="login-button btn ">
              <Link to="/login" className='text-white' >
                login
            </Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <BreadCrumb title="Signup"></BreadCrumb>
    </main>
  );
}

export default Signup;
