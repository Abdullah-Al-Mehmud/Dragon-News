import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Registered Successfully !!");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.code);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-5">
        <div className="hero h-auto py-10 bg-base-200">
          <div className=" flex-shrink-0 w-full max-w-lg  bg-base-100">
            <form onSubmit={handleRegister} className="card-body px-10">
              <h1 className="py-10 text-center font-semibold text-2xl">
                Register your account
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered bg-base-200 border-none outline-none text-sm"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Photo URL"
                  className="input input-bordered bg-base-200 border-none outline-none text-sm"
                  name="photo"
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white">
                  Register
                </button>
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
                  Already have an account ?{" "}
                  <Link to="/login" className=" text-red-500 ">
                    LogIn
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

export default Register;
