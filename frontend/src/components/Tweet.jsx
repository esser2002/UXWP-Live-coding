import './Tweet.css'
import { useState } from 'react';

export function Tweet(props){

    const [hates, setHates] = useState(0)
    const [isLikes, setLiked] = useState(false)

    function addHate(){
        setHates(hates +1)
    }

    function toggleLike(){
        if(isLikes == true){
            setLiked(!isLikes)
        }
        else if(isLikes == false){
            setLiked(!isLikes)
        }
        setLiked(!isLikes)
    }

    return <>
        <div className='tweet'>
            <h1>{props.user.name}</h1>
            <img className='tweet-pb' src='https://hips.hearstapps.com/hmg-prod/images/cute-photos-of-cats-looking-at-camera-1593184780.jpg?crop=0.6672958942897593xw:1xh;center,top&resize=980:*'></img>
            Text i guess {props.user.name} and {props.text}
            <div>
                {props.thing.height} and {props.thing.width}
            </div>
            <div> likes: {isLikes ? 1 : 0}</div>
            <div> hates: {hates} </div>
            <img className='contentimage' src={props.img}></img>
            <button type='button' onClick={addHate}>hate {">:)"}</button>
            <button type='button' onClick={toggleLike}>like {":)"}</button>
        </div>
    </>
}