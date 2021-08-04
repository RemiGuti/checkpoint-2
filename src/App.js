import './App.css';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={GameList}/>
          <Route path="/games/:id" component={GameDetails}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
