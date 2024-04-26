import { useState } from "react"
import './TweetPost.css'
export default function TweetPost(props){
    const [text, setText] = useState("")    

    async function handleSubmit(event){
        event.preventDefault()
        const response = await fetch("http://localhost:8080/tweet",
            {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({tweet: text})
            }
        )
        const json = await response.json()
        //console.log(json);
        props.setTweets(json.tweets)
        setText("")
    }

    return <>
        <form onSubmit={handleSubmit} className="post-form">
            <textarea 
                placeholder="Write a tweet" 
                value={text} 
                onChange={
                    (event) =>
                        setText(event.target.value)
                    }
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    </>
}