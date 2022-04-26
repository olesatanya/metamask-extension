import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './Pages/Auth/Index';
import Home from './Pages/Home/Index';
import Setting from './Pages/Setting/Index';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component = {Auth}></Route>
				<Route exact path="/auth" component = {Auth}></Route>
				<Route exact path="/setting" component = {Setting}></Route>
				<Route exact path="/home" component = {Home}></Route>
				<Route path="*" component = {Auth}></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App;
