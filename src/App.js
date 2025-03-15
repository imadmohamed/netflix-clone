import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeScreen from './Page/HomeScreen/HomeScreen';
import './App.css'  
import ProfileScreen from './Page/ProfleScreen/ProfileScreen';
import LoginScreen from './Page/LoginScreen/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {

  const user = useSelector(selectUser);
  
  console.log(user);
  
  

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if(userAuth){
        dispatch(
          login({
        uid:userAuth.uid,
        email:userAuth.email,
        })
      )
        
      }else{
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[])
  
  return (
    <div className="app">
      <Router>
        {
          !user ?

          <LoginScreen/>
          :
          <Routes>
            <Route path='/profile' element={<ProfileScreen/>} />
            <Route path="/" element={<HomeScreen/>} />
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App