import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeScreen from './Page/HomeScreen/HomeScreen';

const App = () => {

  const user = {
    name: "imad",
    email: "imad@gmail.com",
    password: "1234"
  }
  return (
    <div className="App">
      <Router>
        {
          !user ?

          <h1>Login Screen</h1>
          :
          <Routes>
            <Route path='/profile' element={<HomeScreen/>} />
            <Route path="/" element={<HomeScreen/>} />
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App