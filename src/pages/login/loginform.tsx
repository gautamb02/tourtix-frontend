import React, { useState } from "react";
import axios from 'axios';
import { Link ,useNavigate } from "react-router-dom";
import { LOGIN_API } from '../../../constants';
import { setLogged, setOnboard, setToken } from "../../utils/localStorage";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(LOGIN_API, { email, password })
      .then(result => {
        console.log(result.data);
        // Redirect to the home page or any other page after successful login
        const res = result.data;

        setLogged(true)
        setOnboard(res.organization.onboarded)
        setToken(res.token)

        if(res.organization.onboarded){
          navigate("/dashboard");
        }else{
          navigate("/onboard");
        }
      
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg w-full max-w-4xl">
        {/* Logo/Image Section */}
        <div className="flex items-center justify-center w-full md:w-1/2 p-6">
          <img 
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?uid=R112876432&ga=GA1.1.2137890070.1724574592&semt=ais_hybrid" 
            alt="Logo" 
            className="w-full h-auto max-h-80 object-contain" 
          />
        </div>

        {/* Login form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
          {/* <h2 className="text-2xl font-bold text-center mb-6">Login</h2> */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="text"
                placeholder='Enter Email'
                autoComplete='off'
                name='email'
                className='form-control rounded-md border border-gray-300 p-2 w-full focus:ring-indigo-500 focus:border-indigo-500'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder='Enter Password'
                name='password'
                className='form-control rounded-md border border-gray-300 p-2 w-full focus:ring-indigo-500 focus:border-indigo-500'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="mt-4 w-full p-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition duration-300 shadow-md hover:shadow-lg">
              Log In
            </button>
            <p className="text-center mt-4">
              Don't have an account?<br />
              <Link to="/signup" className="border-t-cyan-500 p-2 inline-block text-indigo-600 text-sm hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;