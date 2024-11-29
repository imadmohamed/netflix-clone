import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {

  const user = null;
  return (
    <div className='app'>
      <Router>
        {
          !user ? 
          // LoginScreen
          <h1>Login Screen</h1>
          :
          <Routes>
            <Route path='/profile' element = {} />
            <Route path = "/" element = {} />
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App