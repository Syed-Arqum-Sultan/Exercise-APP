
// import React, { useState } from "react";
// import {  Navigate } from "react-router-dom";
// import { createUser } from "../../../utils/API";
// import {loggedIn, login} from "../../../utils/auth";

// // import Header from "../components/Header";
// // import '../../index.css';


// export const Signup = ()=> {
//   const logedIn = loggedIn();

//   // set up the orginal state of the form
//   const [formState, setFormState] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   // set state for alert
//   const [showAlert, setShowAlert] = useState(false);

//   // update state based on form input
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // use try/catch to handle errors
//     try {
//       // create new users
//       const response = await createUser(formState);

//       // check the response
//       if (!response.ok) {
//         throw new Error("something went wrong!");
//       }

//       // get token and user data from server
//       const { token } = await response.json();
//       // use authenticaiton functionality
//       login(token);


//     } catch (err) {
//       console.error(err);
//       setShowAlert(true);
//     }
//   };

//   // If the user is logged in, redirect to the home page
//   // if (logedIn) {
//   //   return <Navigate to="/" />;
//   // }

//   return (

//     <div className="signup d-flex flex-column align-items-center justify-content-center text-center">
    
//       <form onSubmit={handleFormSubmit} className="signup-form d-flex flex-column">
//         {/* --------------------username-------------------- */}
//         <label htmlFor="username">Username</label>
//         <input
//           className="form-input"
//           value={formState.username}
//           placeholder="Your username"
//           name="username"
//           type="username"
//           onChange={handleChange}
//         />

//         {/* --------------------email-------------------- */}
//         <label htmlFor="email">Email</label>
//         <input
//           className="form-input"
//           value={formState.email}
//           placeholder="youremail@gmail.com"
//           name="email"
//           type="email"
//           onChange={handleChange}
//         />

//         {/* -------------------- password-------------------- */}
//         <label htmlFor="password">Password</label>
//         <input
//           className="form-input"
//           value={formState.password}
//           placeholder="********"
//           name="password"
//           type="password"
//           onChange={handleChange}
//         />

//         {/* --------------------sign up btn-------------------- */}
//         <div className="btn-div">
//           <button disabled={!(formState.username && formState.email && formState.password)}
//             className="signup-btn mx-auto my-auto"
//           >Sign Up</button>
//         </div>

//         {/* --------------------login link-------------------- */}
//         <p className="link-btn">
//           Already have an account?{' '}
//           {/* <Link to="/login">Log in</Link> */}
//         </p>
//         {showAlert && <div className="err-message">Signup failed</div>}
//       </form>
//     </div>
//   style={{ backgroundImage: 'url(../../assets/running.jpg)', backgroundSize: 'cover' }}  );
// }




// import React, { useState } from 'react';
//  import { createUser } from "../../../utils/API";
//  import {loggedIn, login} from "../../../utils/auth";
//  import { redirect } from "react-router-dom";
//  import Navigation from '../navigation';
 


// function SignupForm() {
//   const logedIn = loggedIn();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     // use try/catch to handle errors
//     try {
//       // create new users
//       const response = await createUser(formData);

//       // check the response
//       if (!response.ok) {
//         throw new Error("something went wrong!");
//       }

//       // get token and user data from server
//       const { token } = await response.json();
//       // use authenticaiton functionality
//       login(token);


//     } catch (err) {
//       console.error(err);
    
//     };
  
  

//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length === 0) {
//       // Perform form submission
//       console.log('Form submitted:', formData);
//     } else {
//       setErrors(validationErrors);
//     }
    
//     window.location.replace("http://127.0.0.1:5173/");

//   };

//   const validateForm = () => {
//     const errors = {};

//     if (formData.username.trim() === '') {
//       errors.username = 'Username is required';
//     }

//     if (formData.email.trim() === '') {
//       errors.email = 'Email is required';
//     } else if (!isValidEmail(formData.email)) {
//       errors.email = 'Invalid email format';
//     }

//     if (formData.password.trim() === '') {
//       errors.password = 'Password is required';
//     }

//     return errors;
//   };
 

//   const isValidEmail = (email) => {
//     // Email validation logic
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
//   // if(loggedIn){
//   //   return redirect('/addactivity')
//   // }

//   return (
//     <div>
//       <header><Navigation/></header>
//     <div
//       className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500"
//       // style={{ backgroundImage: "url('../../assets/running.jpg')",backgroundSize: 'cover',backgroundRepeat:'no-repeate' ,backgroundPosition:'center' }}
//     >
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign Up</h2>
//         <div className="mb-6">
//           <label className="block mb-2 font-medium text-gray-700" htmlFor="username">
//             Username
//           </label>
//           <input
//             type="text"
//             name="username"
//             id="username"
//             value={formData.username}
//             onChange={handleChange}
//             className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${errors.username ? 'border-red-500' : ''}`}
//           />
//           {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${errors.email ? 'border-red-500' : ''}`}
//           />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2 font-medium text-gray-700" htmlFor="password">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//             className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${errors.password ? 'border-red-500' : ''}`}
//           />
//           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 px-4 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
//         >
//           Sign up
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default SignupForm;




import React, { useState } from 'react';
import { createUser } from "../../../utils/API";
import { loggedIn, login } from "../../../utils/auth";
import { redirect } from "react-router-dom";
import Navigation from '../navigation';

function SignupForm() {
  const logedIn = loggedIn();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

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
        const response = await createUser(formData);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const { token } = await response.json();
        login(token);
        window.location.replace("http://127.0.0.1:5173/");
      } catch (err) {
        console.error(err);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (formData.username.trim() === '') {
      errors.username = 'Username is required';
    }

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

  return (
    <div>
      <header><Navigation /></header>
      <div
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500"
      >
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign Up</h2>
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${errors.username ? 'border-red-500' : ''}`}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;

