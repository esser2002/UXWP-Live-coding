import {useState, useEffect} from 'react';
import './App.css'
import { Tweet } from "./components/Tweet"

function App() {
  const [tweets, setTweets] = useState([])

  async function fetchStuff(){ /*Something about promises */
    const response = await fetch("http://localhost:8080/tweets")
    const json = await response.json();
    setTweets(json);
  }

  useEffect(() => {
    fetchStuff();
  })

  return (
    <>

    {/*json object */}
      <h1 style={{textAlign: "center"}}> React live coding2 </h1>
      <div id="content">
        {tweets.map((tweet) =>
          <Tweet
            name={tweet.user}
            thing={{height:3, width:"joe balls"}}
            />
          )
        } 
        <Tweet name="figma balls" thing={{height:2, width:"height"}}/>
      </div>
    </>
  )
}

export default App
