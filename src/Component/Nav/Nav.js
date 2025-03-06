import React from 'react'
import "./Nav.css"
import { useEffect, useState } from 'react';

const Nav = () => {

    const [show, setShow] = useState(false); 

    const transitionNavBar = () => {
        if(window.scrollY >100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);

        return () => window.removeEventListener('scroll',transitionNavBar)
    },[]);
    console.log(show);
  return (
    <nav className={`Nav ${show && "nav_black"}`}>
        <div className='Nav__contents'>
            <img
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt=''
            className='Nav_log'
            />
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className='Nav_avatar'
            />

        </div>

    </nav>
  )
}

export default Nav