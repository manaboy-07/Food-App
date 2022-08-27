/** @format */

import React, { useState } from "react";
import SignImage from "../images/Group 13.svg";
import "../styles/SignUp.css";

function SignUp() {
  const [form, setForm] = useState({
    password: "",
    isPassword: false,
    email: "",
    fullName: "",
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main>
      <div className='sign-page'>
        <div className='img'>
          <img src={SignImage} alt='' />
        </div>
        <div className='form p-8'>
          <div className='form-header '>
            <h1 className='text-center text-5xl p-4 font-extrabold'>
              Welcome to Lilies
            </h1>
          </div>
          <form action='' onSubmit={handleSubmit}>
            <div className='input-form '>
              <input
                type='text'
                placeholder='Your Full Name'
                className='text-primary font-extrabold'
                onChange={handleChange}
                name='fullName'
                value={form.fullName}
                required
              />
            </div>
            <div className='input-form '>
              <input
                type='email'
                placeholder='Your Email Address'
                className='text-primary font-extrabold'
                onChange={handleChange}
                name='email'
                value={form.email}
                required
              />
            </div>
            <div className='input-form ' id='flex'>
              <input
                type={form.isPassword ? "text" : "password"}
                placeholder='Your Password'
                className='text-primary font-extrabold'
                onChange={handleChange}
                name='password'
                value={form.password}
                required
              />
              <button
                className='text-primary font-bold text-2xl cursor-pointer'
                name='isPassword'>
                Show
              </button>
            </div>
            <div>
              <button
                type='submit'
                className='w-full h-18 rounded-md bg-primary p-6 my-3 text-3xl text-secondary font-extrabold'>
                SIGN UP
              </button>
            </div>
            <div>
              <p className='text-2xl text-center font-bold'>
                Already have an account ?{" "}
                <span className='text-primary font-extrabold text-3xl cursor-pointer'>
                  Login
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
