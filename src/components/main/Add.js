import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Add() {
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
   if(!auth){
    navigate('/login')
   }
  },[navigate])
  return (
    <div className='App'>
        <div className="main">
        <h3>I am from Add</h3>
        </div>
    </div>
  )
}
