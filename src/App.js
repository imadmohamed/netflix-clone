import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {

  const user = null;
  return (
    <div className="App">
      <Router>
        {
          !user ?

          <h1>Login Screen</h1>
          :
          <Routes>
            {/* <Route path='/profile' element={} />
            <Route path="/" element={} /> */}
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App