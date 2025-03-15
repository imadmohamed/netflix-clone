import React from 'react'
import "./Nav.css"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={'/'}>
            <img
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt=''
            className='Nav_log'
            />
            </Link>

            <Link to={'/profile'}>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className='Nav_avatar'
            />
            </Link>

        </div>

    </nav>
  )
}

export default Nav