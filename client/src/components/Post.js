import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Post(){

    let {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        Axios.get(`https://blog-website-backend-h0kv.onrender.com/api/post/${postId}`)
        .then((data) => {
            // console.log(data);
            setPost({tit: data.data[0].title, auth: data.data[0].author, txt: data.data[0].body});
        });        
    }, []);
    
    return(        
        <div className="Posts Post">
            <h1>{post.tit}</h1>
            <p>{post.txt}</p>
            <h4>{post.auth}</h4>
        </div>        
    )
}
