


import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import dynamic from 'next/dynamic'
import News from "./News";
import Tech from "./Tech";
function Post({ posts }) {
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

  return (
    <div className='home'>
    {!useSSRPosts
        ? realtimePosts?.map((post) => <Tech key={post._id} post={post} />)
        : posts?.map((post) => <Tech key={post._id} post={post} />)} 

    </div>
  )
}

export default Post