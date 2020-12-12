import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import { Button } from './Button'

function Cards() {
  return (
    <div className='cards'>
      <h1>Charitable funds you may not have heard of:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.dglproject.com/uploads/project_photo/2016-09/save_the_child1.jpg'
              text='Humanitarian Crisis in Yemen'
              label='Save the Children'
              path='https://www.savethechildren.org/'
            />
            <CardItem
              src='https://assets.uuworld.org/sites/live-new.uuworld.org/files/styles/scaled_960_wide_no_upscale/public/conejo_village.belize.jpg?itok=olXiQkix&timestamp=1462649606'
              text='Global Climate Crisis'
              label='ELAW'
              path='https://www.elaw.org/'
            />
            <CardItem
              src='https://i.ytimg.com/vi/DOAy5YxG-Yw/maxresdefault.jpg'
              text='Training rats to save lives'
              label='APOPO'
              path='https://www.apopo.org/'
            />
            <CardItem
              src='http://www.idrf.org/wp-content/uploads/mss-covid-500x362.jpg'
              text='India Development and Relief Fund'
              label='IDRF'
              path='http://www.idrf.org/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://harpers.org/wp-content/uploads/aaronhueynets600.jpg'
              text='Fighting Malaria Worldwide'
              label='Against Malaria Foundation'
              path='https://www.againstmalaria.com/'
            />
            <CardItem
              src='https://i.pinimg.com/originals/9a/3b/d7/9a3bd727f60536c0bcb260ed81426b3d.jpg'
              text='Distributing medicine like consumer-goods'
              label='ColaLife'
              path='https://www.colalife.org/'
            />
            <CardItem
              src='https://www.earlylearningtoolkit.org/sites/default/files/styles/medium/public/Acumen-logo.png?itok=wvv2D5ug'
              text='Fighting poverty with entrepreneurship'
              label='Acumen'
              path='https://acumen.org/'
            />
            <CardItem
              src='https://everwideningcircles.com/wp-content/uploads/2019/09/uganda6-e1569333222614.jpg'
              text='Access to clean water worldwide'
              label='Charity: Water'
              path='https://www.charitywater.org/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://lh3.googleusercontent.com/proxy/sXqKCawCVz8CGUtkJnvSl7HvnPKyKMBc99BqBMFygiOrF5Md9vk_vtLmtmxb36isicjnCXcFfi-O8T0xr7y64gIRDN8PsglQhvGp_chd9Q'
              text='Hand knit clothing and blankets for impoverished people in Afghanistan'
              label='Afghans for Afghans'
              path='http://www.afghansforafghans.org/'
            />
            <CardItem
              src='https://www.map.org/hubfs/CM%20Homepage/mission-moment.jpg'
              text='Life saving medicine and treatment for the impoverished'
              label='Map International'
              path='https://www.map.org/'
            />
            <CardItem
              src='https://www.directrelief.org/wp-content/uploads/2018/01/IMG-20161017-WA0009-e1606260495981.jpg'
              text='Improving the health of those impoverished or in emergency'
              label='Direct Relief'
              path='https://www.directrelief.org/'
            />
            <CardItem
              src='https://www.saveuighur.org/wp-content/uploads/2019/01/Hijabi-Uyghur-with-flag.jpg'
              text='Fundraiser for the protection and rights of Uighur Muslims'
              label='Save Uighur'
              path='https://www.saveuighur.org/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
