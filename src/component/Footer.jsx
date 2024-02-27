import React from 'react'
import '../style/variables.scss'
import '../style/Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="text">
                <ul>
                    <p>CATAGORIES</p>
                    <li>Web Builder</li>
                    <li>Hosting</li>
                    <li>Data Center</li>
                    <li>Robotic-Automation</li>
                </ul>
            </div>

            <div className="text">
                <ul>
                    <p>CONTACT</p>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Services</li>
                    <li>Categories</li>
                    <li>About</li>
                </ul>
            </div>

            <div className="text">
                <br /><br /><br /><br />
                <ul style={{display:'flex'}}>
                    <li className='state'>United States <i id='arrow' class="fa-solid fa-angle-down" style={{color:'white'}}></i></li>
                </ul>
            </div>
        </div>

    )
}

export default Footer
