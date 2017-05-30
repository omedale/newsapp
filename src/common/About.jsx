import React from 'react';
import {Link } from 'react-router-dom';

export default class About extends React.Component {

render(){
    return (
        <div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
        <div className="navbar-header">
        <a className="navbar-brand" href="#">NewsApp</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <ul className="nav navbar-nav">
        <li><Link to="/" className="active" >Home</Link></li>

        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/news">News</Link></li>

        </ul>

        </div>
        </div>
        </nav>

        <h1>About Page</h1>
        </div>);
}
}
