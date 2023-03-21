import React from 'react'

import { useDispatch } from 'react-redux'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addEmail, addPassword } from '../redux';


export const Form = () => {

  const real_email = useSelector(state => state.authentification.email)
  const real_mdp = useSelector(state => state.authentification.password)
  const email = useRef()
  const mdp = useRef()
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const AjoutEmail_Mdp = () => {
    if (real_email === email.current.value && real_mdp === mdp.current.value) {
      dispatch(addEmail(email.current.value));
      dispatch(addPassword(mdp.current.value))
      navigate('/bienvenue')
      console.log("true");
    }else{
      navigate('/')
      
      console.log("fake");
    }
  }
  
  return (
    <div>
        <input type="text" ref={email} placeholder="email"/>
        <input type="text" ref={mdp} placeholder="mdp"/>
        <button onClick={()=>{AjoutEmail_Mdp()}}>clique</button>
    </div>
  )
}