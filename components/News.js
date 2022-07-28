import { Check } from '@mui/icons-material'
import React from 'react'

function News({description,tags,title,img,post}) {
return (
<div className="news">
<div className="news__content">
<div className="news__content_img">
<img src={post.image}/>
</div> 
<div className="news__content__category">
<div className="news__content_category_left">
 <h5>{post.tags}</h5>     

</div> 
<div className="news__content_category_right">
 <Check/>   
 <p>thehook</p>        
</div> 
</div> 
<div className="news__content_readings">
<h6>T{post.title}</h6>
<p>{post.title}</p>
  
</div>
</div>   
</div>
)
}

export default News
