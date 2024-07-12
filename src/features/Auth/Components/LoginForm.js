import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount } from "./AuthSlice";
const LoginForm = ({ HandelLogin, loginlogo,error }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-yellow-100 to-gray-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img className="w-[600px] rounded-2xl" src={loginlogo} alt="Login Logo" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-lime-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login Please</h1>
            <form onSubmit={handleSubmit((data)=>{console.log(data)})}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-600">This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="flex items-center text-bold mx-auto px-4 py-2 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-100"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div>
            </div>
            <p className="my-4 text-center">
              Don't have an account?{" "}
              <Link className="text-purple-600 font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
            <div>
              <p className="text-black bg-orange-400 text-center rounded border fw-bold mt-2">
                <small>{error}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
