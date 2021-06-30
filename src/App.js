import './App.css';

import List from "./components/list";
import Create from "./components/Create";
import Edit from './components/Edit';

import { Route, BrowserRouter as Router,Link } from "react-router-dom";

function App() {
  return (
    <Router>
     <nav className="navbar navbar-expand navbar-dark bg-dark">
         <div className="nav navbar-nav">
             <Link className="nav-item nav-link active" to={"/"}>Sistema</Link>
         </div>
     </nav>
    <div className="container">
      <br></br>
     <Route exact path="/" component={List}></Route>
     <Route path="/create" component={Create}></Route>
     <Route path="/Edit/:id" component={Edit}></Route>

    </div>
    </Router>
  );
}

export default App;
