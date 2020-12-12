import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import Charities from './components/pages/Charities'
import Mission from './components/pages/Mission'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mission' exact component={Mission} />
          <Route path='/charities' exact component={Charities} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
