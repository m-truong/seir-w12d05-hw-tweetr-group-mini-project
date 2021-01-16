import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from './Components/Feed.js'
import CreateTweet from './Components/CreateTweet.js'
import UpdateTweet from './Components/UpdateTweet.js'

function App() {
  return (    
    <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/CreateTweet" component={CreateTweet} />
        <Route path="/UpdateTweet" component={UpdateTweet} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
