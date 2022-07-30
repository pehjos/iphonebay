import React from 'react'

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";

function About() {
const [realtimePosts, setRealtimePosts] = useState([]);
const [handlePost, setHandlePost] = useRecoilState(handlePostState);
const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
useEffect(() => {
const fetchPosts = async () => {
const response = await fetch("/api/posts/", {
method: "GET",
headers: { "Content-Type": "application/json" },
});

const responseData = await response.json();
setRealtimePosts(responseData);
setHandlePost(false);
setUseSSRPosts(false);
};

fetchPosts();
}, [handlePost]);
console.log(realtimePosts)
return (
<div className="about">

<div className="about__content">
<h5>Latest Update</h5>
{realtimePosts?.map((post,index) => (
index<1&&(
  <div className='head' key={post._id}>
<img src={post.image}/>
<p>
{post.title}
</p>
</div>
)))}
</div>
</div>
)
}

export default About
