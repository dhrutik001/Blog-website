import React from "react";

export default function Post(){
    return(        
        <div className="Post" key={key}>
            <h1>{val.title}</h1>
            <p>{val.body}</p>
            <h4>{val.author}</h4>
        </div>        
    )
}
