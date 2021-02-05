import React, { useState, useEffect  } from 'react';
import Axios from 'axios';

export default function CreatePost(){

    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const submitPost = () => {
        Axios.post("http://localhost:3001/api/create", {
            author: author,
            title: title,
            body: body
        })
    }

    // useEffect(() => {
    //     console.log(author + title + body);
    //     // effect
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [author, title, body])

    return(
        <div className="createpost">
            <div className="uploadPost">
                <lable>Title</lable>
                <input type="text"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                <lable>Author</lable>
                <input type="text"
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                />

                <lable>Body</lable>                
                <textarea type="textarea"
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                />

                <button onClick={submitPost}> Submit Blog </button>

            </div>            
        </div>
    )
    
}