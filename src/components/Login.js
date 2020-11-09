import React,{useEffect,useState} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import axios from 'axios';
import '../App.css';
import {useHistory} from "react-router-dom";


function Login(){
    const[username, setUsername]=useState("");
    // const[lastname, setLastname]=useState("");
    // const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[loading, setLoading]=useState(false);
    const[message, setMessage]=useState("");
    let history=useHistory();



    const handleLogin=(e)=>{
        setLoading(true);
        e.preventDefault();
        const data={
            "username": username,
            "password": password,
            // "telephone":email
        }
        //lets send data to endpoint
        axios.post("http://127.0.0.1:8000/user-login/",data)
        .then((res)=>{
            console.log(res.data) 
            
            // setMessage(res.data.message)
            setTimeout(()=>{
                setMessage("Login success")
                setLoading(false)
                history.push('/user-welcome')

            },2000)
            

            //saving data into local storage
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('username',res.data.username)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
            setMessage("Login failed")
            // setMessage("Account created failed")
        })
    }
    return(
        <>
        <Navbar/>
        <div className="bgcolor py-12">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4"></div>
                <div className="w-full md:w-2/4">
                <div className="bg-gray-200 shadow-lg rounded-lg">
                <div className="bg-green-200">{message}</div>
                <form onSubmit={handleLogin} className=" p-6  " method="POST">
                    <label>Username</label>
                    <input type="text"  name="username" value={username} onChange={event=>setUsername(event.target.value)}placeholder="enter ur username"className="w-full border py-4 px-4 rounded-lg"></input>
                    
                    {/* <label>Lastname</label>
                    <input type="text"  name="lastname"  placeholder="enter ur lastname"className="w-full border py-4 px-4 rounded-lg"></input>
                    <label>Email</label>
                    <input type="text"  name="email"  placeholder="enter ur email"className="w-full border py-4 px-4 rounded-lg"></input> */}
                    <label>Password</label>
                    <input type="password"  name="password" value={password} onChange={event=>setPassword(event.target.value)} placeholder="**********"className="w-full border py-4 px-4 rounded-lg"></input>
    <center><button name="" type="submit" className="w-full bg-blue-500 rounded-lg py-4 px-4 mt-3">{loading?<span>please wait...</span>:<span> Login</span>}</button></center>
                </form>

                </div>
                </div>
                <div className="w-full md:w-1/4">
                </div>
            </div>
        </div>
        {/* <div>
            <div className=" gap-4 mt-12 flex flex-wrap">
                <div>1</div>
                <div className="bg-gray-100 rounded-lg py-4 shadow-2xl">
                    <p className="p-2 text-center text-3xl font-bold text-gray-400">user creation</p>
    <div className="bg-green-200">{message}</div>
                   
                </div>
                <div>3</div>
               
            </div>


        </div> */}
        </>
    )
}

export default Login;
