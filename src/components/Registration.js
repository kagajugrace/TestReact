import React,{useEffect,useState} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import axios from 'axios';


function Signup(){
    const[firstname, setFirstname]=useState("");
    const[lastname, setLastname]=useState("");
    const[username, setUsername]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[loading, setLoading]=useState(false);
    const[message, setMessage]=useState("");



    const handleForm=(e)=>{
        setLoading(true);
        e.preventDefault();
        const data={
            "username" : username,
            "first_name": firstname,
            "last_name": lastname,
            "email": email,
            "password": password,
            "profile":{
                "username": username,
                "country": "RWANDA",
                "accounttype":"user",
                "gender":"female"
            }

            // "firstname": firstname,
            // "lastname": lastname,     FOR DATABASE REGISTRATION          
            // "telephone":email
        }
        //lets send data to endpoint
        // axios.post("http://127.0.0.1:8000/reg/endpoint/",data) FOR DATABASE REGISTRATION
        axios.post("http://Localhost:8000/account-creation/",data)
        .then((res)=>{
            console.log(res.data)
            setLoading(false)
            // setMessage(res.data.message)
            setMessage("Account created successful")
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
            // setMessage(err)
            setMessage("Account created failed")
        })
    }
    return(
        <>
        <Navbar/>
        <div>
            <div className=" gap-4 mt-12 flex flex-wrap">
                <div>1</div>
                <div className="bg-gray-100 rounded-lg py-4 shadow-2xl">
                    <p className="p-2 text-center text-3xl font-bold text-gray-400">user creation</p>
    <div className="bg-green-200">{message}</div>
                    <form onSubmit={handleForm} className="p-12">
                    <label>Firstname{firstname}</label>
                    <input type="text"  name="firstname" value={firstname} onChange={event=>setFirstname(event.target.value)}placeholder="enter ur firstname"className="w-full border py-4 px-4 rounded-lg"></input>
                    <label>Lastname</label>
                    <input type="text"  name="lastname" value={lastname} onChange={event=>setLastname(event.target.value)} placeholder="enter ur lastname"className="w-full border py-4 px-4 rounded-lg"></input>
                    <label>Username</label>
                    <input type="text"  name="username" value={username} onChange={event=>setUsername(event.target.value)} placeholder="enter ur username"className="w-full border py-4 px-4 rounded-lg"></input>
                    <label>Email</label>
                    <input type="text"  name="email" value={email} onChange={event=>setEmail(event.target.value)} placeholder="enter ur email"className="w-full border py-4 px-4 rounded-lg"></input>
                    <label>Password</label>
                    <input type="text"  name="password" value={password} onChange={event=>setPassword(event.target.value)} placeholder="**********"className="w-full border py-4 px-4 rounded-lg"></input>
    <button name="" type="submit" className="w-full bg-blue-500 rounded-lg py-4 px-4 mt-4">{loading?<span>please wait...</span>:<span> Create an account</span>}</button>
                </form>
                </div>
                <div>3</div>
               
            </div>


        </div>
        </>
    )
}

export default Signup;
