import { useForm } from 'react-hook-form';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import "../styles/login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },  // Define 'errors' here
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate an asynchronous login request (replace with your actual login logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check login credentials (replace with your actual validation logic)
    if (data.username === 'demo' && data.password === 'demo') {
      console.log('Login successful');
    } else {
      // Set an error if login fails
      alert('Invalid credentials');
    }
  };
  return (
    <div>
      <Meta title="Login"></Meta>
      <div className="login-wrapper  home-wrapper-2 ">
      <div className="container-fluid">
      <form className="mx-auto login-form" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="text-center title">Login</h4>
        <div className="mb-3 mt-5">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder='Enter Username'
            aria-describedby="emailHelp"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <span className="text-danger">{errors.username.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder='Enter Password'
            {...register('password', { required: 'Password is required' })}
          />
          <div id="emailHelp" className="form-text mt-3 text-info">
            <Link to="/Forgotpassword"> Forgot password?</Link>
          </div>
        </div>
           <div className='d-flex gap-3'>
           <button type="submit" className="login-button btn text-white" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
        <button type="submit" className="Signup-button btn " >
          <Link to="/signup" className='text-white' >
          Sign up
            </Link>
        </button>
           </div>
      </form>
    </div>
      </div>

      <BreadCrumb title="Login"></BreadCrumb>
    </div>
  );
};

export default Login;
