import "./App_styles/App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/'>
            <Header />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
