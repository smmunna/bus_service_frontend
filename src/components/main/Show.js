import React,{useEffect} from 'react'
import Comming from "../../images/comming.png"
import {useNavigate} from 'react-router-dom'

export default function Show() {
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
   if(!auth){
    navigate('https://iubat-bus-service.netlify.app/login')
   }
  },[navigate])
  return (
    <div className='App'>
        <div className="main">
            
            <div className="row">
              <div className="col-lg-12">
                 <div className="myimg">
                  <img src={Comming} alt="CommingSoon" srcset="" />
                 </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}
