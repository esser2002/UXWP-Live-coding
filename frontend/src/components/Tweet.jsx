import './Tweet.css'
import { useState } from 'react';

export default function Tweet(props){
    const [isLiked, setLiked] = useState(false)
    
    function toggleLike(){
        if(isLiked){
            setLiked(false)
        }else{
            setLiked(true)
        }
    }
    
    return <>
        <div className="tweet">
            <div className="tweet-header">
                <img className='tweet-pb' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                <div className='tweet-info'>
                    <p>{props.user.name}</p>
                    <small>@{props.user.screen_name}</small>
                    <small>{new Date(props.createdAt).toLocaleString()}</small>
                </div>
            </div>
            <div className="tweet-content">
                <p>{props.tweet}</p>
                <img className='tweet-image' src={props.img} alt="" />
                <button type='button' onClick={toggleLike}>{isLiked ? "Liked" : "Like"} <span>{isLiked ? "1" : "0"}</span></button>
            </div>
        </div>
    </>
}
