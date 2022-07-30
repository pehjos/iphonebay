import React,{useState} from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import Servicess from './Servicess';
import Post from './Post';
import Post1 from './Post1';
import Post2 from './Post2';
function WhatWeDo() {
    const [state, setstate] = useState({
        index: 0,
      })
      
       const handleChange = (event, value) => {
          setstate({
            index: value,
          });
        };
      
       const handleChangeIndex = index => {
          setstate({
            index,
          });
        };
      
        const { index } = state;
        const styles = {
          tabs: {
            // background: '#fff',
          },
          slide: {
         
            maxHeight: 900,
            color: '0',
           
          },
          slide1: {
            minHeight: 150,
            with:'20'
            // backgroundColor: '#FEA900',
          },
          slide2: {
            maxHeight: 50,
            with:'200',
            // backgroundColor: '#B3DC4A',
          },
          slide3: {
            with:'200',
            // backgroundColor: '#6AC0FF',
          },
          slide4: {
            // backgroundColor: '#6AC0FF',
          },
          slide5: {
            // backgroundColor: '#6AC0FF',
          },
          slide6: {
            // backgroundColor: '#6AC0FF',
          },
        };
      
    return (
        <div className="whatwedo">
      <div className="whatwedo__tab">
        <Tabs indicatorColor="primary"
     value={index} fullWidth onChange={handleChange} >
          <Tab label="IPHONE" />
          <Tab label="TECHNOLOGIES" />
          <Tab label="NEWS" />
          {/* <Tab label="Science" />

          <Tab label="Technology" /> */}
        </Tabs>
        </div>
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>   
          <Post/>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
      <Post/>
           
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
         <Post/>
          </div>
          
        </SwipeableViews>
      </div>
   
    
    )
}

export default WhatWeDo
