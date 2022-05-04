import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../Container/Layout'

export default () => {
  return (
        <Router basename={'/'} >
            <Routes>
                <Route exact path='/' element={<Home />}/>
            </Routes>
        </Router>
  )
}
