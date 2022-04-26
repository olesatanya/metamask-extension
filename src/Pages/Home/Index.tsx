import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './Home';
import Activity from './Activity';
import Assets from './Asset';
import Buy from './Buy';
import Send from './Send';
import Swap from './Swap';
import Connect_wallet from './Connect_wallet';
import Create_account from './Create_account';
import Import_account from './Import_account';
import Import_token from './Import_token';
import Lock from './Lock';

function Index() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component = {Home}></Route>
				<Route exact path="/activity" component = {Activity}></Route>
				<Route exact path="/assets" component = {Assets}></Route>
				<Route exact path="/buy" component = {Buy}></Route>
				<Route exact path="/send" component = {Send}></Route>
				<Route exact path="/swap" component = {Swap}></Route>
				<Route exact path="/connect-wallet" component = {Connect_wallet}></Route>
				<Route exact path="/create-account" component = {Create_account}></Route>
				<Route exact path="/import-account" component = {Import_account}></Route>
				<Route exact path="/import-token" component = {Import_token}></Route>
				<Route exact path="/lock" component = {Lock}></Route>
				<Route path="*" component = {Home}></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Index;