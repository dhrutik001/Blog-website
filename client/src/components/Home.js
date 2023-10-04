import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom'


const Home = () => {

    const [postList, setPostList] = useState([]);
    let history = useHistory();
    const Like = (id) => {
        Axios.post(`https://upgraded-meme-9w97qv794qgc99xq-5001.app.github.dev/api/like/${id}`)
        .then((data) => {
            alert("you liked a post");
        });
    };

    useEffect(() => {
        Axios.get("https://upgraded-meme-9w97qv794qgc99xq-5001.app.github.dev/api/get")
        .then((data) => {            
            // console.log(data);
            setPostList(data.data);
        });
    }, []);

    return (
        <div className="HomePage">
            <div className="PostContainer">
                {postList.map((val, key) => {
                    return (
                        <div className="Posts" key={key} onClick={()=>{
                                                                history.push(`/post/${val._id}`)
                                                         }}>
                            {/* <h1>{val._id}</h1> */}
                            <h1>{val.title}</h1>
                            <p> {val.body.length > 350 ? val.body.substring(0,350) + ' ...' : val.body}</p>
                            <button className="btn btn-outline-primary col-3 m-3" onClick={() => {Like(val._id)}}>Like : {val.like}</button>
                            <h4>{val.author}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
