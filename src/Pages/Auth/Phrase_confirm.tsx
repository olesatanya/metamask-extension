import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from './Layout'

import './seed_phrase.scss'

const PhraseConfirm = () => {
	return <>
		<Layout>
			<div style={{marginTop:'5%', padding:'0 1em'}}>
				<div className="card">
					<h2 style={{ textAlign:'center'}}>Confirm your Secret Recovery Phrase</h2>
					<p>Please select each phrase in order to make sure it is correct.</p>
					<div className="word-panel"></div>
					<div className="row">
						<div className="col-3"><button className="btn-word">alone</button></div>
						<div className="col-3"><button className="btn-word">alone</button></div>
						<div className="col-3"><button className="btn-word">alone</button></div>
						<div className="col-3"><button className="btn-word">alone</button></div>
					</div>
					<div className="row">
						<div className="col-3"><button className="btn-word">hello</button></div>
						<div className="col-3"><button className="btn-word">alone</button></div>
						<div className="col-3"><button className="btn-word active">dog</button></div>
						<div className="col-3"><button className="btn-word">alone</button></div>
					</div>
					<div className="row">
						<div className="col-3"><button className="btn-word">alone</button></div>
						<div className="col-3"><button className="btn-word">alone</button></div>
						<div className="col-3"><button className="btn-word active">confirm</button></div>
						<div className="col-3"><button className="btn-word">secret</button></div>
					</div>
					<div className="row center" style={{padding:'15px 5px'}}>
						<Link className='btn-puc'  to="/done"  >Confirm</Link>
					</div>
				</div>
			</div>
		</Layout>	
	</>
}


export default PhraseConfirm;