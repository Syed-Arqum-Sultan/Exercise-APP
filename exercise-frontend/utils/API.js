// export const getMe = (token) =>{
//     return fetch('/',{
//         headers: {
//             'Content-Type': 'application/json',
//             authorization : `Bearer ${token}`

//         },
//     });
// };

export const createUser = (username, email, password)=>{
    return fetch('http://localhost:4000/signUp',{
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({username, email, password}) 
    });
};

export const loginUser= async(username, password)=> {
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
  return data;
};


export const  createActivity = async(activityData, token) =>{
    return await fetch('http://localhost:4000/',{
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            authorization: `Bearer ${token}`
    },
        body: JSON.stringify(activityData)

    });

};
export const getActivityById =(id, token) =>{
    return  fetch(`http://localhost:4000/api/${id}`,{
       
        headers: {
            'Content-Type': "application/json",
            authorization: `Bearer ${token}`
    }

    });

};
// export const getCardioById = (cardioId, token) => {
//     return fetch(`/api/exercise/cardio/${cardioId}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${token}`,
//       }
//     })
// };
export const deleteExercise = (exerciseId, token) => {
    return fetch(`http://localhost:4000/${exerciseId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
  }
  

  export const updateActivity = async(exerciseId, data, token) => {
    return await fetch(`http://localhost:4000/${exerciseId}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(data),
    });
  }
  

// 
