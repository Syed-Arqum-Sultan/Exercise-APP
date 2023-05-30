 import React, { useState } from 'react';
import { loggedIn, login } from "../../../utils/auth";
import { loginUser } from "../../../utils/API";
import { redirect } from 'react-router-dom';
import Navigation from '../navigation';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await loginUser(formData);
        const token = response.token;
        login(token);
      } catch (err) {
        console.log(err);
        setShowAlert(true);
      }

      // clear form values
      setFormData({
        email: "",
        password: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (formData.password.trim() === '') {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const loader = async () => {
    const loggedIn1 = loggedIn();
    if (loggedIn1) {
      return redirect("/addactivity");
    }
    return null;
  };

  return (
    <div>
      <header><Navigation /></header>
      <div
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500"
        style={{
          backgroundImage: "url('../../assets/running.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Log In</h2>
          {showAlert && (
            <div className="bg-red-500 text-white text-center py-2 px-4 mb-4 rounded">
              Invalid email or password
            </div>
          )}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
