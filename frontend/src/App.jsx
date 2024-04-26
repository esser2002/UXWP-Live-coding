import {useState, useEffect} from 'react';
import './App.css'
import { Tweet } from "./components/Tweet"
import TweetPost from "./components/TweetPost"

function App() {
  const [tweets, updateTweets] = useState([])

  async function fetchStuff(){ /*Something about promises */
    const response = await fetch("http://localhost:8080/tweets")
    const json = await response.json();
    updateTweets(json);
  }

  useEffect(() => {
    fetchStuff();
  }, [])

  return (
    <>
    <TweetPost setTweets={updateTweets}></TweetPost>

    {/*json object */}
      <h1 style={{textAlign: "center"}}> React live coding2 </h1>
      <div id="content">
        {tweets.map((tweet) =>
          <Tweet
            key={tweet.id}
            user={tweet.user}
            text={tweet.text}
            thing={{height:3, width:"joe balls"}}
            />
          )
        } 
        <Tweet user={{name:"figma balls"}} thing={{height:2, width:"height"}}/>
      </div>
    </>
  )
}

export default App
