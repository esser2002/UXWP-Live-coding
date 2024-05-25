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
            <h1>{props.user.name}
            <img className='tweet-pb' src='https://hips.hearstapps.com/hmg-prod/images/cute-photos-of-cats-looking-at-camera-1593184780.jpg?crop=0.6672958942897593xw:1xh;center,top&resize=980:*'></img>
            </h1>
            <p>Text i guess {props.user.name} and {props.text}</p>
            
            <div>
                {props.thing.height} and {props.thing.width}
            </div>
            <div> likes: {isLikes ? 1 : 0}</div>
            <div> hates: {hates} </div>
            <div className="grid-container">
                <div className="grid-item">1</div>
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>
                <div className="grid-item">4</div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
                <div className="grid-item">9</div>
            </div>
            <button type='button' onClick={addHate}>hate {">:)"}</button>
            textbetwwen <br />           
            <button type='button' onClick={toggleLike}>like {":)"}</button>
        </div>
    </>
}