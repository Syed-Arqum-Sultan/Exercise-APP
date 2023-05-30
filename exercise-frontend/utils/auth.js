import decode from 'jwt-decode';


export const getProfile =()=>{
    try{
    
    const decoder = decode(getToken());
    console.log(decoder);
    return decoder;

}catch(e){
    console.log(e);
    throw new Error( {error: " error while getting Profile"});
};

};

export const  getUserId = ()=> {
    
    return getProfile().id

 
};


export const loggedIn =()=>{
    try{
        const token  = getToken();
        return token;
    }catch(e){
        // console.error(e);
        throw new Error( {error: " error while getting Profile"});
    };
};

export const getToken = () => {
    const token =  localStorage.getItem('id_token');
    // console.log(token);
    return token    
}
export const login =(idToken) =>{
    console.log(localStorage.setItem("id_token", idToken));
    window.location.assign('/');
}

export const logout=()=> {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  };
