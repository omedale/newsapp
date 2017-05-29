import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, Link } from 'react-router-dom';

import Home from "./home.component.jsx";
import About from "./about.component.jsx";
import Login from "./login.component.jsx";
import News from "./news.component.jsx";
import Headlines from "./headline.component.jsx";


class DisplayNewsSources extends React.Component {
  render() {
    return (
      <News />
    );
  }
}

const Main = () => (
  <Router >
    <div>
    <Route  exact path="/" component={Home} history={browserHistory}/>
     <Route path="/about" component={About} title="about"/>
     <Route path="/login" component={Login}/>
      <Route path="/headlines/:id" component={Headlines}/>
    <Route path="/news" component={News}/>
      {/*<Route path="/news" render={(...props)=><DisplayNewsSources  tk="somthing" {...props} />} />*/}
    </div>
  </Router>
)

export default Main