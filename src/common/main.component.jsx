import React from "react";
import { BrowserRouter as Router, Route, browserHistory, Link } from "react-router-dom";

import Home from "./home.component.jsx";
import About from "./about.component.jsx";
import Login from "./login.component.jsx";


class Button extends React.Component {
    constructor(props) {
    super(props);
  }
  render() {
      console.log(this.props);
       console.log(this.props.match.params.id);
       return (
    <div>
    <h3>ID--: {this.props.match.params.id}</h3>
  </div>)
  }
}



const Main = () => (

  <Router>
    <div>
       <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">NewsApp</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                            <ul className="nav navbar-nav">
                                <li><Link to="/" className="active" >Home</Link></li>

                                <li><Link to="/btn" >Buttons</Link></li>
                                <li><Link to="/about">About</Link></li>
                                 <li><Link to="/login">Login</Link></li>

                            </ul>

                        </div>
                    </div>
                </nav>

      <Route  exact path="/" component={Home} history={browserHistory}/>
      <Route path="/about" component={About} title="about"/>
     <Route path="/login" component={Login}/>
    </div>
  </Router>
)

export default Main