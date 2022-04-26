import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from './Layout'

import './welcome.scss'
const Welcome = () => {
	return <>
		<Layout>
			<div style={{marginTop:'77%', textAlign:'center', padding:'1em'}}>
				<h2>Welcome to ICICB Metamask</h2>
				<h3 style={{lineHeight:'10px'}}>Connecting you to Ethereum</h3>
				<h3 style={{lineHeight:'10px'}}>and the Decentralized Web.</h3>
				<div className="row center"><Link className='btn-puc'  to="/select-action" style={{top:'20px'}} >Get Started</Link></div>
			</div>
		</Layout>	
	</>
}


export default Welcome;