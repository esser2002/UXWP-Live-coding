import { useState, useEffect } from 'react';
import './App.css'
import Tweet from "./components/Tweet";
import TweetPost from './components/TweetPost';

function App() {
  const [tweets, setTweets] = useState([])

  async function fetchTweets(){
    const response = await fetch("http://localhost:8080/tweets")
    const json = await response.json()
    setTweets(json)
  }
  useEffect(() => {
    fetchTweets()
  }, [])


  return (
    <>
      <div id="content">
        <TweetPost setTweets={setTweets}/>
        {
          tweets.map((tweet) => 
            <Tweet 
            key={tweet.id}
            user={tweet.user} 
            createdAt={tweet.created_at}
            tweet={tweet.text}
            img={tweet.img}
            />
          )
        }

      </div>
    </>
  );
}

export default App;
