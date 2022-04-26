import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from './Layout'


const ImportWallet = () => {
	return <>
		<Layout>
			<div style={{marginTop:'0', padding:'0 1em'}}>
				<div className="card">
					<h3 className='text-center'>Import a wallet with Secret Recovery Phrase</h3>
					<p className='text-center' style={{lineHeight:'4px'}}>Secret Recovery Phrase</p>
                    <input type="password" className='input-password w100' placeholder='Enter your Secret Recovery Phrase'/>
					<label className='p'>New password (min 8 chars)</label>
                    <input type="password" className='input-password w100'/>
					<label className='p'>Confirm password</label>
                    <input type="password" className='input-password w100'/>
					<div className="row center">
						<label className=" mt3  container-check">
							I have read and agree to the <a style={{color:'#016da1'}} href='https://metamask.io/terms.html' target="_blank">  Terms of Use</a>
							<input type="checkbox" checked/>
							<span className="checkmark"></span>
						</label>
					</div>
					<div className="row center">
						<Link className='btn-puc'  to="/done"  >Import</Link>
					</div>
				</div>
			</div>
		</Layout>	
	</>
}


export default ImportWallet;