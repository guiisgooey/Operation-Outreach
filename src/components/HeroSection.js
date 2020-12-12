import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='https://www.insperity.com/wp-content/uploads/2015/08/8-ways-to-ensure-your-company-aligns-with-the-right-charities-640x302.png' />
      <h1>Operation Outreach</h1>
      <p>Advancing international and lesser-known charities and funds</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' use='charities'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' use='mission'>
          Learn More <i className='fas fa-info-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
