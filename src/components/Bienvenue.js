import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Bienvenue = () => {
    const navigate = useNavigate();
    const Deconnexion = () => {
        navigate('/')
    }
    const checkmail = useSelector (state => state.authentification.email);
  return (
    <div>
        {checkmail}
        <button onClick={()=>{Deconnexion()}}>Deconnexion</button>
    </div>
  )
}