import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from './Layout'


const Action = () => {
	return <>
		<Layout>
			<div style={{marginTop:'0', textAlign:'center', padding:'0 1em'}}>
				<h2>New to MetaMask?</h2>
				<div className="card">
					<h3>
						No, I already have a Secret Recovery Phrase
					</h3>
					<p className='text-grey'>Import your existing wallet using a Secret Recovery Phrase</p>
					<Link className='btn-puc'  to="/import-phrase"  >Import wallet</Link>
				</div>
				<div className="card">
					<h3>
						Yes, let’s get set up!
					</h3>
					<p className='text-grey'>This will create a new wallet and Secret Recovery Phrase</p>
					<Link className='btn-puc'  to="/create-password"  >Create wallet</Link>
				</div>
			</div>
		</Layout>	
	</>
}


export default Action;