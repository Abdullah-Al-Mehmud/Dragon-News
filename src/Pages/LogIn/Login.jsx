import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useState } from "react";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(null);
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    // login
    signInUser(email, password)
      .then(() => {
        setSuccess("LogIn Successful !!");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setError(error.code));
  };

  return (
    <div className="bg-base-200">
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen ">
          <div className=" flex-shrink-0 w-full max-w-lg  bg-base-100">
            <form onSubmit={handleLogIn} className="card-body px-10">
              <h1 className="py-10 text-center font-semibold text-2xl">
                Login your account
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered bg-base-200 border-none outline-none text-sm"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered bg-base-200 border-none outline-none text-sm"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white">Login</button>
              </div>
              <div className="mt-4">
                {success ? (
                  <p className="font-bold text-green-500">{success}</p>
                ) : (
                  <p className="font-bold text-red-500">{error}</p>
                )}
              </div>
              <div className="text-center mt-4">
                <p className="font-bold">
                  Dont’t Have An Account ?{" "}
                  <Link to="/register" className=" text-red-500 ">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
