import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { SIGNUP_API } from '../../../constants';

const SignUpForm: React.FC = () => {
  const [organizationName, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(SIGNUP_API, { organizationName, email, password })
      .then(result => {
        console.log(result);
        navigate("/login");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex items-center bg-white shadow-lg p-6 rounded-lg">
        {/* Space for logo */}
        <div className="mr-6">
          <img src="https://img.freepik.com/free-vector/online-registration-concept-with-flat-design_23-2147976704.jpg?uid=R112876432&ga=GA1.1.2137890070.1724574592&semt=ais_hybrid" alt="Logo" className="object-cover w-auto h-80" />
        </div>
        
        {/* Sign-up form */}
        <form onSubmit={handleSubmit} className="w-80">
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder='Enter Name'
              autoComplete='off'
              name='name'
              className='form-control rounded-0 w-full border border-gray-300 p-2'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control rounded-0 w-full border border-gray-300 p-2'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder='Enter Password'
              name='password'
              className='form-control rounded-0 w-full border border-gray-300 p-2'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-full bg-purple-400 text-white py-2 rounded-md">
            Sign Up
          </button>
          <p className="text-center mb-3">
            Already have an account?<br/><br/>
            <Link to="/login" className="btn border-t-cyan-500 mt-5 p-2 text-center btn-default border w-100 bg-light rounded-0 text-decoration-none">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
