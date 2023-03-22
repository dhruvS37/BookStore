import React, { useState,useEffect } from 'react'
import axios from 'axios'

function PostDetail() {
    const [id ,setID] = useState(1)
    const[post,setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

  return (
    <div>
        <input type="number" value={id} onChange={(e)=>{setID(e.target.value)}}></input>
        <div>{post.title}</div>
    </div>
  )
}

export default PostDetail