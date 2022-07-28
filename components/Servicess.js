import React from 'react'

import{Language,PeopleOutlineRounded,LocalMallRounded,TabRounded,WeekendRounded,WbIncandescentRounded,BubbleChartRounded
} from '@mui/icons-material'
function Tech({img,title,description,post}) {
return (
<div className="tech">
<div className="tech__child">
<div className="tech__child_content">
<div className="tech__child_content_right">
<img src={post.image}/>
</div>
<div className="tech__child_content_left">
<h5>{post.title}</h5>
<p>{post.title}</p>
</div>
</div>
</div>
</div>
)
}

export default Tech
