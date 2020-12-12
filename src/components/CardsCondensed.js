import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import { Button } from './Button'

function CardsCondensed() {
  return (
    <div className='cards'>
      <h1>Featured charitable funds:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/savethechildren.png'
              text='Humanitarian Crisis in Yemen'
              label='Save the Children'
              path='https://www.savethechildren.org/'
            />
            <CardItem
              src='images/elaw.jpg'
              text='Global Climate Crisis'
              label='ELAW'
              path='https://www.elaw.org/'
            />
            <CardItem
              src='images/apopo.jpg'
              text='Training rats to save lives'
              label='APOPO'
              path='https://www.apopo.org/'
            />
            <CardItem
              src='images/idrf.jpg'
              text='India Development and Relief Fund'
              label='IDRF'
              path='http://www.idrf.org/'
            />
          </ul>
          <div className='view__more'>
          <Button buttonStyle='btn--primary2' use='charities'> View More </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsCondensed