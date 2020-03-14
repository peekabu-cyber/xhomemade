import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "./App";
import Info from "./components/Info";
import Meals from "./components/Meals";
import Contact from "./components/Contact";
import Login from "./components/login";
import Signup from "./components/Signup"
import Error from "./components/error"
import Signout from "./components/signout"

const Router = () => (
	<BrowserRouter>
	<Switch>
		<Route path = "/" component = {App} exact/>
		<Route path = "/recipe/:id" component = {Info}/>
		<Route path = "/mymeals" component = {Meals}/>
		<Route path = "/contact" component = {Contact}/>
		<Route path = "/login" component = {Login}/>
		<Route path = "/signup" component = {Signup}/>
		<Route path = "/signout" component = {Signout}/>
		<Route component={Error}/>
	</Switch>
	</BrowserRouter>
);

export default Router;
