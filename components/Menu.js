import React from 'react'
import {Hidden} from '@mui/material'
function Menu() {
    return (
        <div className="menu">
             <Hidden mdUp>
             <div className="menu__list">
             <p>HOME</p>
              <p>ABOUT US</p>
              <p>WORKS</p>
              <p>TESTIMONIAL</p>
            </div>  
            </Hidden>
        </div>
    )
}

export default Menu

