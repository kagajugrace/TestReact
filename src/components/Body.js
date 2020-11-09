import React,{component,useEffect,useState} from 'react';
import '../css/tailwindcss.css';
import bench from '../image/pop.jpeg'
import bench1 from '../image/pop2.jpg'
import Navbar from '../components/Navbar';
import axios from 'axios';


function Body(){
    const[ida,setIda]=useState('Welcome to IDA Technology');
    const[count,setCount]=useState(0);
    const[loading,setLoading]=useState(false);
    const[data, setData]= useState([]);
    const clickHandle= ()=>{
        setLoading(true);
        setCount(count+1);
        setIda(ida+2);

        setTimeout(function(){
            setLoading(false);
        },3000);
         //    let fetch information
    }
        useEffect(async ()=>{
            const response =axios.get('http://127.0.0.1:8000/reg/endpoint/')
            .then((res)=>{ 
                setData(res.data);
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        
        },[]
        
        );
    
    return(
        <div>
            <Navbar/>
            <h1 className="text-center text-4xl text-red-300">this our body</h1>
            <h2>State value:{count}</h2>
            <button onClick={clickHandle}>{loading?<p>Loading.......</p>:<p>Update me</p>}</button>
            {/* <button onClick={()=>setCount(count+1)}>Update me</button> */}
<div className="flex flex-wrap">
            <img src={bench} alt=""/>
            <a href="/">Home</a>
<br/><br/>

            <a href="/about-us">About</a>
            {/* <img src={bench1} alt=""/> */}
            </div>

            <table className="table">
                <tr>
                    <th>Id</th>
      
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Telephone</th>
                </tr>
            {data.map( (item,key)=>{
                return(
                    <tr key={key}>
                    <td>{item.id}</td>
                    
                <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.telephone}</td>
                </tr>
                )
            }
            )}
            </table>
        </div>


    );
}
export default Body;
