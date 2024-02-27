import React from 'react'
import '../style/Navbar.scss'

function Navbar() {
    return (
    
        <div>
            <div className='navbar'>
            <i class="fa-solid fa-magnifying-glass" id='search'></i>
            <input type="text"  />
            <ul>
                <li>Categories</li>
                <li>Website Builder</li>
                <li>Today's Deal</li>
            </ul>
            </div>
            
        </div>
        
    )
}

export default Navbar
