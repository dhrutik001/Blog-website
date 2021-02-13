import React, { useState, useEffect  } from 'react';
import Axios from 'axios';

export default function CreatePost(){

    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const submitPost = () => {
        Axios.post('http://localhost:3001/api/create', {
            author: author,
            title: title,
            text: text,
        })
    }

    useEffect(() => {
        // console.log("hello world");
        // console.log(author + title + text);
        // effect
        // return () => {
        //     cleanup
        // }
    }, [author, title, text])

    return(
        
        <div className="createPost">
            <div className="uploadPost">
                Title
                <input type="text"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                Author
                <input type="text"
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                />
                Text
                <textarea type="textarea row-3"                    
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />

                <button className="btn btn-outline-dark col-4 align-self-center m-2" onClick={submitPost}> Submit Blog </button>
            </div>            
        </div>
    )
    
}