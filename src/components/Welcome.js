import React,{useEffect,useState} from 'react';
import '../css/tailwindcss.css';
import {useHistory} from "react-router-dom";


function Welcome(){
    const[localuser, setLocaluser]=useState("");
    let history= useHistory();
    const user=localStorage.getItem("username");
    //setlocaluser

    const logout=()=>{
        localStorage.removeItem("username");
        history.push("/user-login")
    }
    if(!user){
        history.push("/user-login")

    }
    return(
        <>
        <div>
    <p>Welcome to admin page<span className="bg-green-800 px-3 font-bold text-4xl" >{user}</span></p>
    <button onClick={logout}>Logout</button>
        </div>
        </>
    )
}
export default Welcome;