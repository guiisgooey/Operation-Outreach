import React from 'react'
import './MissionStatement.css'

function MissionStatement() {
    return (
        <div className='statement'>
            <h2>Mission</h2>
            <h3>What is Operation Outreach?</h3>
            <p>
                Operation Outreach is a new website that aims to advertise international and lesser-known charitable funds that 
                provide great services at large. It would be great if everyone knew about these services, but unfortunately that just
                isn't the case. Unfortunately in many developed countries it can be hard for people to look outside of their own socioeconomic
                bubble and see many of the crises and tragedies taking place in the world. It is our mission to open the eyes of those people and 
                provide a central hub for charitable funds that they may donate to in hopes of relieving these crises.     
            </p>
            <h3>How much should I donate?</h3>
            <p>
               However, much money you donate is up to you.
               It is recommended however that you only donate while in a position of financial stability.
               But remember, any donation amount helps.  
            </p>
            <h3>Can I donate to Operation Outreach?</h3>
            <p>
                Unfortunately, we are not currently accepting donations. 
                The responsibility of ensuring that donations actually go where they are intended is 
                far too great for our current team to handle. 
                Instead, please donate directly to the funds listed on site
            </p>
            <h3>Current Listed Charities:</h3>
            <ul className='listedCharities'>
                <li> <a href='https://www.savethechildren.org/'>Acumen</a> </li>
                <li> <a href='https://www.savethechildren.org/'>Afghans for Afghans</a> </li>
                <li> <a href='https://www.savethechildren.org/'>Against Malaria Foundation</a> </li>
                <li> <a href='https://www.savethechildren.org/'>APOPO</a> </li>
                <li> <a href='https://www.savethechildren.org/'>Charity: Water</a> </li>
                <li> <a href='https://www.savethechildren.org/'>ColaLife</a> </li>
                <li> <a href='https://www.savethechildren.org/'>Direct Relief</a> </li>
                <li> <a href='https://www.savethechildren.org/'>ELAW</a> </li>
                <li> <a href='https://www.savethechildren.org/'>India Development and Relief Fund</a> </li>
                <li> <a href='https://www.savethechildren.org/'>MAP International</a> </li>
                <li> <a href='https://www.savethechildren.org/'>Save the Children</a> </li>
                <li> <a href='https://www.savethechildren.org/'>Save Uigher</a> </li>
            </ul>
            <h2>For any questions about donating money please visit <a href='https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=4756'>Charity Navigator</a></h2>
        </div>
    )
}

export default MissionStatement
