import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {

  function scrollToTop(){
    window.scroll(0,0)
  }

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Operation Outreach newsletter to receive updates on new and featured charities
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo' onClick={scrollToTop}>
              Operation Outreach
            </Link>
          </div>
          <small class='website-rights'>Operation Outreach © 2020</small>
        </div>
      </section>
    </div>
  )
}

export default Footer

