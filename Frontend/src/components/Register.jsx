import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
    const [message, setMessage] = useState("");
   const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("http://localhost:5000/api/user/register", data);
            console.log(res.data);
            setMessage("Registration successful");
            navigate("/login"); 

        } catch (error) {
            console.error(error);
            setMessage("Registration failed");
        }
    };

    const handleGoogleSignIn = () => {
        // Handle Google Sign-In
    };

    return (
        <div>
            <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
                <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <h2 className='text-xl font-semibold mb-4'>Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                            <input
                                {...register("email", { required: true })}
                                type="email" name="email" id="email" placeholder='Email Address'
                                className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                            <input
                                {...register("password", { required: true })}
                                type="password" name="password" id="password" placeholder='Password'
                                className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                            />
                        </div>
                        <div>
                            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Register</button>
                        </div>
                    </form>
                    <p className='align-baseline font-medium mt-4 text-sm'>Have an account? Please
                        <Link to="/login" className='text-blue-500 hover:text-blue-700'>Login</Link>
                    </p>
                    <div className='mt-4'>
                        <button onClick={handleGoogleSignIn}
                            className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                            <FaGoogle className='mr-2' />
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;