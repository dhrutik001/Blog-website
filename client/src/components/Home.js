import React, { useEffect, useState } from 'react';
import Axios from 'axios';


const Home = () => {    
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((data) => {            
            console.log(data);
            setPostList(data.data);
        });
    }, []);

    return (
        <div className="HomePage">
            <div className="PostContainer">
                {postList.map((val, key) => {
                    return (
                        <div className="Post" key={key}>
                            <h1>{val.title}</h1>
                            <p> {val.body.length > 350 ? val.body.substring(0,350) + ' ...' : val.body}</p>
                            <h4>{val.author}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
