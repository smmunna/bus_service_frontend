/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from 'react'
import Bus from "../../images/iubat-bus.png"
import {useNavigate} from 'react-router-dom';
export default function Signup() {
    // All the functionalities all be here=>

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth)
        {
            navigate('https://iubat-bus-service.netlify.app/home')
        }
    },[navigate])
    // Onclick btn Submitton;
    const signUp = async()=>{
        if(!name || !id || !password || name==null || password == null || id==null || name.length<4 || id.length<8){
            setError(true)
            return false;
        }
        let result = await fetch("https://iubat-bus-service.herokuapp.com/user/signup",{
            method:"post",
            body: JSON.stringify({name,id,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        localStorage.setItem('user',JSON.stringify(result))
        console.log(result);

        location.reload();
    }
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
                        <p>Sign Up</p>
                        <hr />
                         { error && !name && <span className='input-validation'>Enter valid name <br /></span>} 
                        <input  type="text" placeholder='Enter Your Name (4 char long)' value={name} required onChange={(e)=>{setName(e.target.value)}}/> <br /> <br />
                        
                        { error && !id && <span className='input-validation'>Enter valid id <br /></span>}
                        <input type="text" placeholder='Enter Your ID (8 char long)' value={id} onChange={(e)=>{setId(e.target.value)}} /> <br /> <br />
                        
                        { error && !password && <span className='input-validation'>Enter valid password <br /></span>}
                        <input type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br /> <br />
                        <button onClick={signUp}>Sign Up</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
