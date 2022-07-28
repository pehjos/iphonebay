import React from 'react'
import {LinkedIn,Facebook,Twitter,GitHub, 
} from '@mui/icons-material'

function Footer() {
    return (
        <div className="main_footer">
              <div className="footer">
                <div className= "footer1"> 
                  <h5>Contacts</h5>
                  <p className="email">pehjos4@gmail.com</p>
                  <p>+233 277 591 063</p>
                  <h5 className="contact1">More Contacts</h5>
                  </div>
                  </div>  

                  <div className="iconn">
                      <LinkedIn/>
                      <Facebook/>
                      <Twitter/> 
                      <GitHub/> 
                  </div>

                
                  
                  <div className ='end'>
                      <p>All content are registered under copyright,this site is build and maintain by Pehjos Inc fam🚀🚀🚀❤❤</p>
                  <p>© 2022 hook</p>
             
                  </div>   
        </div>
    )
}

export default Footer