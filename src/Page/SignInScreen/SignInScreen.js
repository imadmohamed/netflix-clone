import React from 'react'
import "./SignInScreen.css"
import { useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from  "firebase/auth"
import { auth } from '../../firebase'

const SignInScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    });
  }  

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => {
      alert(error.message);
    });
  }

  return (
    <div className='signinScreen'>
      <form>
        <h1>Sign In</h1>
        <input 
        value={email}
        placeholder='Email' 
        type="email" 
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        value={password}
        placeholder='Password' 
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
        <span className='signinScreen_gray' >New to Netflix? </span>
        <span className='signinScreen_Link' onClick={register}>Sign up Now</span>
        </h4>
        

      </form>
    </div>
  )
}

export default SignInScreen