import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import "../styles/login.css";
import { useForm } from "react-hook-form";

const Forgetpassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate an asynchronous signup request (replace with your actual signup logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check signup credentials (replace with your actual validation logic)
    if (data.username === "demo" && data.password === "demo") {
      console.log("Signup successful");
    } else {
      // Set an error if signup fails
      alert("Invalid credentials");
    }
  };
  return (
    <main>
      <Meta title="Forgot password"></Meta>
      <div className="Signup-wrapper  home-wrapper-2 ">
        <div className="container-fluid">
          <form
            className="mx-auto login-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h4 className="text-center title"> Forgot password?</h4>
            <div className="mb-4 mt-5">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder='Enter email'

                {...register("email", { required: "email is required" })}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
            <div className="d-flex gap-3">
              <button type="button" className="login-button btn ">
                <Link to="/" className="text-white">
                  Send
                </Link>
              </button>
              <button type="submit" className="Signup-button btn">
                <Link to="/signup" className="text-white">
                  Sign up
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <BreadCrumb title="Forgot password"></BreadCrumb>
    </main>
  );
};

export default Forgetpassword;
