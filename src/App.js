import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Termekek from './Termekek';
import UjTermekek from './UjTermekek';
import Navbarcomps from './Navbarcomps';


function App() {
  return (

    <Router>
      <div className="App">
        <Navbarcomps />
        <Switch>
          <Route path="/Termekek" exact component={Termekek} />
          <Route path="/Ujtermekek" component={UjTermekek } />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
