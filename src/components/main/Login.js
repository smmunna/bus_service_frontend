/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Bus from "../../images/iubat-bus.png"
import "../../App.css"
export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  
// Onclick btn Submitton;
const Login = async ()=>{
  if( !id || !password || password == null || id==null || id.length<8){
    setError(true)
    return false;
}
    let result = await fetch("https://iubat-bus-service.herokuapp.com/user/login",{
      method:'post',
      body: JSON.stringify({id,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })

    result = await result.json();
    localStorage.setItem("user",JSON.stringify(result))
    console.log(result);
    location.reload();
    
}

useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate("https://iubat-bus-service.netlify.app/home")
    }
},[navigate])
 
  return (
    <div className='App'>
        <div className="main">
        <div className="row">
                <div className="col-lg-6">
                    {/* Bus image  */}
                    <img src={Bus} alt="BusImage" className='bus' srcset="" />
                </div>
                <div className="col-lg-6">
                    <div className="form">
                        {/* Form Data will be Here for SignUp a User */}
                        <p>Login</p>
                        <hr />
                        { error && !id && <span className='input-validation'>Enter valid id <br /></span>} 
                        <input type="text" placeholder='Enter Your ID (8 char long)' onChange={(e)=>{setId(e.target.value)}}  /> <br /> <br />
                       
                        { error && !password && <span className='input-validation'>Enter valid Password <br /></span>} 
                        <input type="password" placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}}/> <br /> <br />
                        <button onClick={Login}>Login</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
