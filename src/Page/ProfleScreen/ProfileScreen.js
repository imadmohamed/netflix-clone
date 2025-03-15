import React from 'react'
import "./ProfileScreen.css"
import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux'
import Nav from "../../Component/Nav/Nav"

const ProfileScreen = () => {
  const user = useSelector(selectUser)
  return (
    
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
       <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
       />
       <div className="profileScreen_details">
        <h2>{user.email}</h2>
       
       <div className="profileScreen_plance">
        <h3>Plans</h3>
        {/* <Plance /> */}
       </div>
        <button className='profilescreen_signOut'>Sign Out</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen