import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from './Layout'

// import './seed_phrase.scss'

const SeedPhrase = () => {
	return <>
		<Layout>
			<div style={{marginTop:'5%', textAlign:'center', padding:'0 1em'}}>
				<div className="card">
					<h2>Secret Recovery Phrase</h2>
					<p>Your Secret Recovery Phrase makes it easy to back up and restore your account.</p>
					<p>WARNING: Never disclose your Secret Recovery Phrase. Anyone with this phrase can take your Ether forever.</p>
					<div className="word-panel">silver torch bachelor attitude amateur merge person romance siege hope rural final</div>
					<div className="row center" style={{padding:'15px 5px'}}>
						<Link className='btn-puc noeffect'  to="/phrase-confirm"  >Remind me later</Link>
						<Link className='btn-puc'  to="/phrase-confirm"  >Next</Link>
					</div>
				</div>
			</div>
		</Layout>	
	</>
}


export default SeedPhrase;