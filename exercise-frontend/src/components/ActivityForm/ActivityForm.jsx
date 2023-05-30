// import React, { useState, useEffect } from 'react';

// import {redirect} from 'react-router-dom';
// import { createActivity, getActivityById, deleteExercise} from '../../../utils/API';
// import { getToken, loggedIn, login, getUserId } from '../../../utils/auth';
// import { confirmAlert } from "react-confirm-alert";
// import  Navigation  from '../../components/navigation';

// const activityTypes = ['running', 'walking', 'jumping', 'cardio'];

// function ExerciseForm() {

    
//   const loggedIn1 = loggedIn();
//   const [formData, setFormData] = useState({
//     description: '',
//     activityType: '',
//     duration: '',
//     date: ''
//   });

//   const [activityCards, setActivityCards] = useState([]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
// const validateForm = (formData) => {
//     return formData.description && formData.activityType && formData.duration && formData.date;
// }

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     const token = loggedIn1 ? getToken(): null;
//     console.log(token)
//     if(!token){
//         return false
//     }
//     const userId = getUserId();
//     console.log('this is the id we are trying to show',userId)
    
//     if (validateForm(formData)) {
//         try {
//             // add userid to cardio form
//             formData.userId = userId;

//             const response = await createActivity(formData, token);

//              if (!response.ok) {
//                 console.log(response);
//                  throw new Error('something went wrong!');
//              }

           
//             setTimeout(() => {
              
//             }, 3000);
//         } catch (err) {
//             console.error(err)
//         }
//     }

//     // clear form input
//     setFormData({
//         name: "",
//         distance: "",
//         duration: "",
//         date: ""
//     }); 
//     redirect("/addactivity");
// };
// // if(!loggedIn1){
// //     return redirect('/login') 
// // }

// // const handleDelete = (activityId) => {
// //     // Delete activity from backend
    
// //     axios.delete(`/api/activities/${activityId}`)
// //       .then((response) => {
// //         console.log('Activity deleted:', response.data);
// //         // Remove the deleted activity from the activity cards list
// //         setActivityCards(activityCards.filter((activity) => activity.id !== activityId));
// //       })
// //       .catch((error) => {
// //         console.error('Error deleting activity:', error);
// //       });
// //   };
// const handleDeleteExercise = async (exerciseId) => {
//     console.log(exerciseId);
//     const token = loggedIn ? getToken() : null;
//     if (!token) return false;

//     confirmAlert({
//         title: "Delete Exercise",
//         message: "Are you sure you want to delete this exercise?",
//         buttons: [
//             {
//                 label: "Cancel",
//             },
//             {
//                 label: "Delete",
//                 onClick: async () => {
//                     // delete cardio data
                    
//                         try {
//                             const response = await deleteExercise(exerciseId, token);
//                             if (!response.ok) { throw new Error('something went wrong!') }
//                         }
//                         catch (err) { console.error(err) }
//                         // redirect('/addactivity');
//                     }
//             }
//         ]
//     });
// }



// useEffect(() => {
//     const displayExercise = async() => {
        
//         //get token
//         const token = loggedIn ? getToken() : null;
//         if (!token) return false;
//         const userId1 = getUserId();
//          console.log(userId1);
        
//         // fetch exercise data by id
//             try {
//                 const response = await getActivityById(userId1, token);
//                 console.log(response);
//                 if (!response.ok) { throw new Error('something went wrong!') }

//                 const exercise = await response.json();
//                 console.log(exercise);
//                 setActivityCards(exercise);
//                 // cardio.date = formatDate(cardio.date)
//                 // setCardioData(cardio)
//             } catch (err) { console.error(err) }
        
//     };
//     displayExercise()
//   }, []);
//   const loader = async () => {
//     const loggedIn1 = loggedIn();
//     if (!loggedIn1) {
//       return redirect("/login");
//     }
//     return null;
//   };

// // useEffect(() => {
 
// //     // Fetch activity data from the backend for the logged-in user
// //     const fetchActivities = async () => {
// //         const userId1 = getUserId();
// //         console.log(userId1);
// //       try {
// //         const response = await fetch(`/${userId1}`); // Replace with the actual API endpoint for fetching user-specific activities
// //         const data = await response.json();
// //         setActivityCards(data);
// //       } catch (error) {
// //         console.error('Error fetching activities:', error);
// //       }
// //     };

// //     fetchActivities();
// //   }, []);

 






//     // Send the activity data to the backend API
//     // axios.post('/api/activities', formData)
//     //   .then((response) => {
//     //     // Handle the successful response (e.g., show a success message, update UI, etc.)
//     //     console.log('Activity submitted:', response.data);

//         // Create a new activity card based on the submitted data
// //         const newActivityCard = {
// //           id: response.data.id,
// //           description: formData.description,
// //           activityType: formData.activityType,
// //           duration: formData.duration,
// //           date: formData.date
// //         };

// //         // Add the new activity card to the list
// //         setActivityCards([...activityCards, newActivityCard]);
// //       })
// //       .catch((error) => {
// //         // Handle any errors (e.g., show an error message, log the error, etc.)
// //         console.error('Error submitting activity:', error);
// //       });

// //     Reset the form data
   
// //   };

//   return (
//     <div>
//     <header><Navigation/></header>
//     <div
//     className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-1000 to-pink-500"
//     style={{ backgroundImage: "url('../../assets/running.jpg')", backgroundSize: 'cover' }}
//   >
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md-12 px-8 py-6 mb-4">
//       <h2 className="text-3xl font-bold text-center mb-6 text-white">Exercise Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-6">
//           <label className="block mb-4 font-medium text-gray-700" htmlFor="description">
//             Description
//           </label>
//           <input
//             type="text"
//             name="description"
//             id="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2 font-medium text-gray-700" htmlFor="activityType">
//             Activity Type
//           </label>
//           <select
//             name="activityType"
//             id="activityType"
//             value={formData.activityType}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//           >
//             <option value="">Select an activity type</option>
//             {activityTypes.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2 font-medium text-gray-700" htmlFor="duration">
//             Duration
//           </label>
//           <input
//             type="text"
//             name="duration"
//             id="duration"
//             value={formData.duration}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2 font-medium text-gray-700" htmlFor="date">
//             Date
//           </label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 px-4 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//      <div className="max-w-md mx-auto md-12 ">
//       {activityCards.map((activity) => (
//         <div key={activity.id} className="bg-white shadow-lg rounded-lg px-8 py-6 mb-4">
//           <h3 className="text-xl font-bold mb-2">{activity.description}</h3>
//           <p className="text-gray-700 mb-2">
//             <span className="font-medium">Activity Type:</span> {activity.activityType}
//           </p>
//           <p className="text-gray-700 mb-2">
//             <span className="font-medium">Duration:</span> {activity.duration}
//           </p>
//           <p className="text-gray-700 mb-2">
//             <span className="font-medium">Date:</span> {activity.date}
//           </p>
//           <div className="flex justify-end">
//             <button
//               onClick={() => handleEdit(activity._id)}
//               className="px-3 py-2 text-sm text-white bg-blue-500 rounded-md mr-2"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => handleDeleteExercise(activity._id)}
//               className="px-3 py-2 text-sm text-white bg-red-500 rounded-md"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//     </div>
//   );
// }

// export default ExerciseForm;
// import React, { useState, useEffect } from 'react';
// import {  redirect } from 'react-router-dom';
// import { createActivity, getActivityById, deleteExercise } from '../../../utils/API';
// import { getToken, loggedIn, getUserId } from '../../../utils/auth';
// import { confirmAlert } from "react-confirm-alert";
// import Navigation from '../../components/navigation';

// const activityTypes = ['running', 'walking', 'jumping', 'cardio'];

// function ExerciseForm() {
// //   const history = useHistory();
//   const loggedIn1 = loggedIn();
//   const [formData, setFormData] = useState({
//     description: '',
//     activityType: '',
//     duration: '',
//     date: ''
//   });

//   const [activityCards, setActivityCards] = useState([]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validateForm = (formData) => {
//     return formData.description && formData.activityType && formData.duration && formData.date;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = loggedIn1 ? getToken() : null;
//     if (!token) {
//       return false;
//     }
//     const userId = getUserId();

//     if (validateForm(formData)) {
//       try {
//         formData.userId = userId;

//         const response = await createActivity(formData, token);

//         if (!response.ok) {
//           throw new Error('Something went wrong!');
//         }

//         setTimeout(() => {}, 3000);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     setFormData({
//       description: '',
//       activityType: '',
//       duration: '',
//       date: ''
//     });
//   };

//   const handleDeleteExercise = async (exerciseId) => {
//     const token = loggedIn1 ? getToken() : null;
//     if (!token) return false;

//     confirmAlert({
//       title: "Delete Exercise",
//       message: "Are you sure you want to delete this exercise?",
//       buttons: [
//         {
//           label: "Cancel",
//         },
//         {
//           label: "Delete",
//           onClick: async () => {
//             try {
//               const response = await deleteExercise(exerciseId, token);
//               if (!response.ok) {
//                 throw new Error('Something went wrong!');
//               }
//             } catch (err) {
//               console.error(err);
//             }
//           }
//         }
//       ]
//     });
//   };

//   useEffect(() => {
//     const displayExercise = async () => {
//       const token = loggedIn1 ? getToken() : null;
//       if (!token) return false;
//       const userId1 = getUserId();

//       try {
//         const response = await getActivityById(userId1, token);
//         if (!response.ok) {
//           throw new Error('Something went wrong!');
//         }

//         const exercise = await response.json();
//         setActivityCards(exercise);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     displayExercise();
//   }, []);

//   const loader = async () => {
//     if (!loggedIn1) {
//       return redirect('/login');
//     }
//     return null;
//   };

//   return (
//     <div>
//       <header>
//         <Navigation />
//       </header>
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-1000 to-pink-500"
//       style={{ backgroundImage: "url('../../assets/running.jpg')", backgroundSize: 'cover' }}>
//         <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:w-3/4 lg:w-1/2 xl:w-1/3 px-8 py-6 mb-4">
//           <h2 className="text-3xl font-bold text-center mb-6 text-white">Exercise Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label className="block mb-4 font-medium text-gray-700" htmlFor="description">
//                 Description
//               </label>
//               <input
//                 type="text"
//                 name="description"
//                 id="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 font-medium text-gray-700" htmlFor="activityType">
//                 Activity Type
//               </label>
//               <select
//                 name="activityType"
//                 id="activityType"
//                 value={formData.activityType}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               >
//                 <option value="">Select an activity type</option>
//                 {activityTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 font-medium text-gray-700" htmlFor="duration">
//                 Duration
//               </label>
//               <input
//                 type="text"
//                 name="duration"
//                 id="duration"
//                 value={formData.duration}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 font-medium text-gray-700" htmlFor="date">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 id="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 px-4 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//         <div className="max-w-md mx-auto md:w-3/4 lg:w-1/2 xl:w-1/3">
//           {activityCards.map((activity) => (
//             <div key={activity.id} className="bg-white shadow-lg rounded-lg px-8 py-6 mb-4">
//               <h3 className="text-xl font-bold mb-2">{activity.description}</h3>
//               <p className="text-gray-700 mb-2">
//                 <span className="font-medium">Activity Type:</span> {activity.activityType}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <span className="font-medium">Duration:</span> {activity.duration}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <span className="font-medium">Date:</span> {activity.date}
//               </p>
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => handleEdit(activity._id)}
//                   className="px-3 py-2 text-sm text-white bg-blue-500 rounded-md mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteExercise(activity._id)}
//                   className="px-3 py-2 text-sm text-white bg-red-500 rounded-md"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExerciseForm;


// import React, { useState, useEffect } from 'react';
// import { redirect } from 'react-router-dom';
// import { createActivity, getActivityById, deleteExercise, updateActivity } from '../../../utils/API';
// import { getToken, loggedIn, getUserId } from '../../../utils/auth';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import Navigation from '../../components/navigation';

// const activityTypes = ['running', 'walking', 'jumping', 'cardio'];

// function ExerciseForm() {

//   const [editActivity, setEditActivity] = useState(null);



//   const loggedIn1 = loggedIn();
//   const [formData, setFormData] = useState({
//     description: '',
//     activityType: '',
//     duration: '',
//     date: ''
//   });

//   const [activityCards, setActivityCards] = useState([]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validateForm = (formData) => {
//     return formData.description && formData.activityType && formData.duration && formData.date;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = loggedIn1 ? getToken() : null;
//     if (!token) {
//       return false;
//     }
//     const userId = getUserId();

//     if (validateForm(formData)) {
//       try {
//         formData.userId = userId;

//         const response = await createActivity(formData, token);

//         if (!response.ok) {
//           throw new Error('Something went wrong!');
//         }

//         setTimeout(() => {}, 3000);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     setFormData({
//       description: '',
//       activityType: '',
//       duration: '',
//       date: ''
//     });
//   };

//   const handleDeleteExercise = async (exerciseId) => {
//     const token = loggedIn1 ? getToken() : null;
//     if (!token) return false;

//     confirmAlert({
//       title: 'Delete Exercise',
//       message: 'Are you sure you want to delete this exercise?',
//       buttons: [
//         {
//           label: 'Cancel',
//         },
//         {
//           label: 'Delete',
//           onClick: async () => {
//             try {
//               const response = await deleteExercise(exerciseId, token);
//               if (!response.ok) {
//                 throw new Error('Something went wrong!');
//               }
//             } catch (err) {
//               console.error(err);
//             }
//           }
//         }
//       ]
//     });
//   };


//   const handleEdit = (activityId) => {
//     const selectedActivity = activityCards.find((activity) => activity.id === activityId);
//     setEditActivity(selectedActivity);
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
  
//     // Perform form validation
//     if (!validateForm(formData)) {
//       return;
//     }
  
//     const token = loggedIn1 ? getToken() : null;
//     if (!token) {
//       return;
//     }
  
//     try {
//       const updatedActivity = { ...editActivity, ...formData };
//       const response = await updateActivity(updatedActivity, token);
  
//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }
  
//       // Update the activity in the activity cards list
//       const updatedActivityCards = activityCards.map((activity) =>
//         activity.id === editActivity.id ? updatedActivity : activity
//       );
//       setActivityCards(updatedActivityCards);
  
//       setFormData({
//         description: '',
//         activityType: '',
//         duration: '',
//         date: ''
//       });
  
//       setEditActivity(null); // Reset the edit activity state
//     } catch (err) {
//       console.error(err);
//     }
//   };





//   useEffect(() => {
//     const displayExercise = async () => {
//       const token = loggedIn1 ? getToken() : null;
//       if (!token) return false;
//       const userId1 = getUserId();

//       try {
//         const response = await getActivityById(userId1, token);
//         if (!response.ok) {
//           throw new Error('Something went wrong!');
//         }

//         const exercise = await response.json();
//         setActivityCards(exercise);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     displayExercise();
//   }, []);

//   const loader = async () => {
//     if (!loggedIn1) {
//       return redirect('/login');
//     }
//     return null;
//   };

//   return (
//     <div>
//       <header>
//         <Navigation />
//       </header>
//       <div
//         className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-1000 to-pink-500"
//         style={{ backgroundImage: "url('../../assets/running.jpg')", backgroundSize: 'cover' }}
//       >
//         <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:w-3/4 lg:w-1/2 xl:w-1/3 px-8 py-6 mb-4">
//           <h2 className="text-3xl font-bold text-center mb-6 text-white">Exercise Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label className="block mb-4 font-medium text-gray-700" htmlFor="description">
//                 Description
//               </label>
//               <input
//                 type="text"
//                 name="description"
//                 id="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 font-medium text-gray-700" htmlFor="activityType">
//                 Activity Type
//               </label>
//               <select
//                 name="activityType"
//                 id="activityType"
//                 value={formData.activityType}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               >
//                 <option value="">Select an activity type</option>
//                 {activityTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 font-medium text-gray-700" htmlFor="duration">
//                 Duration
//               </label>
//               <input
//                 type="text"
//                 name="duration"
//                 id="duration"
//                 value={formData.duration}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 font-medium text-gray-700" htmlFor="date">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 id="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 px-4 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//         <div className="max-w-md mx-auto md:w-3/4 lg:w-1/2 xl:w-1/3">
//           {activityCards.map((activity) => (
//             <div key={activity.id} className="bg-white shadow-lg rounded-lg px-8 py-6 mb-4">
//               <h3 className="text-xl font-bold mb-2">{activity.description}</h3>
//               <p className="text-gray-700 mb-2">
//                 <span className="font-medium">Activity Type:</span> {activity.activityType}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <span className="font-medium">Duration:</span> {activity.duration}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <span className="font-medium">Date:</span> {activity.date}
//               </p>
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => handleEdit(activity._id)}
//                   className="px-3 py-2 text-sm text-white bg-blue-500 rounded-md mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteExercise(activity._id)}
//                   className="px-3 py-2 text-sm text-white bg-red-500 rounded-md"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
///this one
// export default ExerciseForm;




//updateActivity
// import React, { useState, useEffect } from 'react';
// import { redirect } from 'react-router-dom';
// import { createActivity, getActivityById, deleteExercise } from '../../../utils/API';
// import { getToken, loggedIn, getUserId } from '../../../utils/auth';
// import { confirmAlert } from "react-confirm-alert";
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import Navigation from '../../components/navigation';

// const activityTypes = ['running', 'walking', 'jumping', 'cardio'];

// function ExerciseForm() {
//   const loggedIn1 = loggedIn();
//   const [formData, setFormData] = useState({
//     description: '',
//     activityType: '',
//     duration: '',
//     date: ''
//   });

//   const [activityCards, setActivityCards] = useState([]);
//   const [editActivity, setEditActivity] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validateForm = (formData) => {
//     return formData.description && formData.activityType && formData.duration && formData.date;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = loggedIn1 ? getToken() : null;
//     if (!token) {
//       return false;
//     }
//     const userId = getUserId();

//     if (validateForm(formData)) {
//       try {
//         formData.userId = userId;

//         const response = await createActivity(formData, token);

//         if (!response.ok) {
//           throw new Error('Something went wrong!');
//         }

//         setTimeout(() => {}, 3000);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     setFormData({
//       description: '',
//       activityType: '',
//       duration: '',
//       date: ''
//     });
//   };

//   const handleDeleteExercise = async (exerciseId) => {
//     const token = loggedIn1 ? getToken() : null;
//     if (!token) return false;

//     confirmAlert({
//       title: "Delete Exercise",
//       message: "Are you sure you want to delete this exercise?",
//       buttons: [
//         {
//           label: "Cancel",
//         },
//         {
//           label: "Delete",
//           onClick: async () => {
//             try {
//               const response = await deleteExercise(exerciseId, token);
//               if (!response.ok) {
//                 throw new Error('Something went wrong!');
//               }
//             } catch (err) {
//               console.error(err);
//             }
//           }
//         }
//       ]
//     });
//   };

//   const handleEdit = (activityId) => {
//     setEditActivity(activityId);
//   };

//   const handleUpdate = async () => {
//     const token = loggedIn1 ? getToken() : null;
//     if (!token) return false;

//     try {
//       const response = await updateActivity(editActivity, formData, token);
//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }
//       setEditActivity(null);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     const displayExercise = async () => {
//       const token = loggedIn1 ? getToken() : null;
//       if (!token) return false;
//       const userId1 = getUserId();

//       try {
//         const response = await getActivityById(userId1, token);
//         if (!response.ok) {
//           throw new Error('Something went wrong!');
//         }

//         const exercise = await response.json();
//         setActivityCards(exercise);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     displayExercise();
//   }, []);

//   const loader = async () => {
//     if (!loggedIn1) {
//       return redirect('/login');
//     }
//     return null;
//   };

//   return (
//     <div>
//       <header>
//         <Navigation />
//       </header>
//       <div
//         className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-1000 to-pink-500"
//         style={{ backgroundImage: "url('../../assets/running.jpg')", backgroundSize: 'cover' }}
//       >
//         <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:w-3/4 lg:w-1/2 xl:w-1/3 px-8 py-6 mb-4">
//           <h2 className="text-3xl font-bold text-center mb-6 text-white">Exercise Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label className="block mb-4 font-medium text-gray-700" htmlFor="description">
//                 Description
//               </label>
//               <input
//                 type="text"
//                 name="description"
//                 id="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 font-medium text-gray-700" htmlFor="activityType">
//                 Activity Type
//               </label>
//               <select
//                 name="activityType"
//                 id="activityType"
//                 value={formData.activityType}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               >
//                 <option value="">Select an activity type</option>
//                 {activityTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 font-medium text-gray-700" htmlFor="duration">
//                 Duration
//               </label>
//               <input
//                 type="text"
//                 name="duration"
//                 id="duration"
//                 value={formData.duration}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block mb-2 font-medium text-gray-700" htmlFor="date">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 id="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 px-4 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//         <div className="max-w-md mx-auto md:w-3/4 lg:w-1/2 xl:w-1/3">
//           {activityCards.map((activity) => (
//             <div key={activity.id} className="bg-white shadow-lg rounded-lg px-8 py-6 mb-4">
//               {editActivity === activity.id ? (
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">Editing exercise</h3>
//                   <form>
//                     <div className="mb-4">
//                       <label className="block mb-2 font-medium text-gray-700" htmlFor={`description_${activity.id}`}>
//                         Description
//                       </label>
//                       <input
//                         type="text"
//                         name={`description_${activity.id}`}
//                         id={`description_${activity.id}`}
//                         value={formData.description}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block mb-2 font-medium text-gray-700" htmlFor={`activityType_${activity.id}`}>
//                         Activity Type
//                       </label>
//                       <select
//                         name={`activityType_${activity.id}`}
//                         id={`activityType_${activity.id}`}
//                         value={formData.activityType}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                       >
//                         <option value="">Select an activity type</option>
//                         {activityTypes.map((type) => (
//                           <option key={type} value={type}>
//                             {type}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="mb-4">
//                       <label className="block mb-2 font-medium text-gray-700" htmlFor={`duration_${activity.id}`}>
//                         Duration
//                       </label>
//                       <input
//                         type="text"
//                         name={`duration_${activity.id}`}
//                         id={`duration_${activity.id}`}
//                         value={formData.duration}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block mb-2 font-medium text-gray-700" htmlFor={`date_${activity.id}`}>
//                         Date
//                       </label>
//                       <input
//                         type="date"
//                         name={`date_${activity.id}`}
//                         id={`date_${activity.id}`}
//                         value={formData.date}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                       />
//                     </div>
//                     <button
//                       type="button"
//                       onClick={handleUpdate}
//                       className="w-full py-2 px-4 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                     >
//                       Save
//                     </button>
//                   </form>
//                 </div>
//               ) : (
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">{activity.description}</h3>
//                   <p className="text-gray-500">
//                     <span className="font-semibold">Activity Type:</span> {activity.activityType}
//                   </p>
//                   <p className="text-gray-500">
//                     <span className="font-semibold">Duration:</span> {activity.duration}
//                   </p>
//                   <p className="text-gray-500">
//                     <span className="font-semibold">Date:</span> {activity.date}
//                   </p>
//                   <div className="flex justify-end mt-4">
//                     <button
//                       className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
//                       onClick={() => handleDeleteExercise(activity.id)}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       className="px-4 py-2 ml-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                       onClick={() => handleEdit(activity.id)}
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExerciseForm;





//////changes
import React, { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { createActivity, getActivityById, deleteExercise, updateActivity } from '../../../utils/API';
import { getToken, loggedIn, getUserId } from '../../../utils/auth';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Navigation from '../../components/navigation';

const activityTypes = ['running', 'walking', 'jumping', 'cardio'];

function ExerciseForm() {
  const [editActivity, setEditActivity] = useState({
    description: '',
    activityType: '',
    duration: '',
    date:""
  });
  const [showPopup, setShowPopup] = useState(false);
  
  const loggedIn1 = loggedIn();
  const [formData, setFormData] = useState({
    description: '',
    activityType: '',
    duration: '',
    date: ''
  });

  const [activityCards, setActivityCards] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = (formData) => {
    return formData.description && formData.activityType && formData.duration && formData.date;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = loggedIn1 ? getToken() : null;
    if (!token) {
      return false;
    }
    const userId = getUserId();

    if (validateForm(formData)) {
      try {
        formData.userId = userId;

        const response = await createActivity(formData, token);

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        setTimeout(() => {}, 3000);
      } catch (err) {
        console.error(err);
      }
    }

    setFormData({
      description: '',
      activityType: '',
      duration: '',
      date: ''
    });
  };

  const handleDeleteExercise = async (exerciseId) => {
    const token = loggedIn1 ? getToken() : null;
    if (!token) return false;

    confirmAlert({
      title: 'Delete Exercise',
      message: 'Are you sure you want to delete this exercise?',
      buttons: [
        {
          label: 'Cancel',
        },
        {
          label: 'Delete',
          onClick: async () => {
            try {
              const response = await deleteExercise(exerciseId, token);
              if (!response.ok) {
                throw new Error('Something went wrong!');
              }
            } catch (err) {
              console.error(err);
            }
          }
        }
      ]
    });
  };

  const handleEdit = (activityId) => {
    console.log(activityId);
    const selectedActivity = activityCards.find((activity) => activity._id === activityId);
    console.log("selected:",selectedActivity);
    setEditActivity({
        ...selectedActivity,
    [key]: value
    });
    console.log("edited",editActivity);
    setShowPopup(true);
    
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    // Perform form validation
    if (!validateForm(formData)) {
      return;
    }
  
    const token = loggedIn1 ? getToken() : null;
    if (!token) {
      return;
    }
  
    try {
        
      const updatedActivity = { ...editActivity, ...formData };
    //   const id=updateActivity._id
    //   console.log(id)
      const response = await updateActivity(editActivity.id, updatedActivity, token);
  
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
  
      // Update the activity in the activity cards list
      const updatedActivityCards = activityCards.map((activity) =>
        activity._id === editActivity.id ? updatedActivity : activity
      );
      setActivityCards(updatedActivityCards);
  
      setFormData({
        description: '',
        activityType: '',
        duration: '',
        date: ''
      });
  
      setEditActivity(null);
      setShowPopup(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = loggedIn1 ? getToken() : null;
      if (!token) {
        redirect('/');
      }
      const userId = getUserId();

      try {
        const response = await getActivityById(userId, token);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const activityData = await response.json();
        setActivityCards(activityData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Exercise Tracker</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div>
              <label htmlFor="activityType" className="block text-gray-700 font-semibold mb-2">Activity Type</label>
              <select
                id="activityType"
                name="activityType"
                value={formData.activityType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              >
                <option value="">Select an activity type</option>
                {activityTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="duration" className="block text-gray-700 font-semibold mb-2">Duration (minutes)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-2 px-4 mt-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Add Exercise
          </button>
        </form>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Exercises</h2>
        <ul>
          {activityCards.map((activity) => (
            <li key={activity.id} className="bg-gray-100 p-4 rounded-md mb-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{activity.description}</h3>
                  <p className="text-sm text-gray-600">{activity.activityType}</p>
                </div>
                <div>
                  <button
                    className="text-sm text-red-600 hover:underline mr-2"
                    onClick={() => handleEdit(activity._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-sm text-red-600 hover:underline"
                    onClick={() => handleDeleteExercise(activity._id)}
                   
                  > 
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">Duration: {activity.duration} minutes</p>
              <p className="text-sm text-gray-600">Date: {activity.date}</p>
            </li>
          ))}
        </ul>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-md p-8">
            <h2 className="text-xl font-bold mb-4">Edit Exercise</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="activityType" className="block text-gray-700 font-semibold mb-2">Activity Type</label>
                <select
                  id="activityType"
                  name="activityType"
                  value={formData.activityType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                >
                  <option value="">Select an activity type</option>
                  {activityTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="duration" className="block text-gray-700 font-semibold mb-2">Duration (minutes)</label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-2 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  Update
                </button>
                <button
                  className="py-2 px-4 bg-gray-300 text-gray-800 font-semibold rounded-md ml-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={() => {
                    setEditActivity(null);
                    setShowPopup(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ExerciseForm;





