import React,{useState} from 'react'
import Menu from './Menu'
import {Hidden} from '@mui/material'
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import {Close} from '@mui/icons-material'
function Nav() {
    const [state,setState] =useState(false)
    const openNav=()=>{
if(state){
setState(false)

}
else{
    setState(true)

}


    }
    return (
        <div className="nav_main">
        <div className = "nav">
        <Hidden smDown>
            <div className = "nav_menu">
              <p>HOME</p>
              <p>ABOUT US</p>
              <p>WORKS</p>
              <p>TESTIMONIAL</p>

            </div>
          </Hidden>

            </div>  
            {state?(<Menu/>):''}
            <Hidden mdUp>
    <div className = "icon">
        <p>hook</p>
            
            {state?(<Close onClick={openNav}/>):(< ClearAllRoundedIcon fontSize="large" onClick={openNav}/>)}
            </div>
            </Hidden>
        </div>
    )
}

export default Nav
