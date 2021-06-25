import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/views/NavBar/NavBar";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Router exact path="/" component={LandingPage} />
          <Router path="/login" component={LoginPage} />
          <Router path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
