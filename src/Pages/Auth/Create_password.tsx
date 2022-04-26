import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from './Layout'


const CreatePassword = () => {
	return <>
		<Layout>
			<div style={{marginTop:'0',  padding:'0 1em'}}>
				<div className="card">
                    <h2 style={{textAlign:'center'}}>Create Password</h2>
					<p>New password (min 8 chars)</p>
                    <input type="password" className='input-password w100'/>
                    <p>Confirm password</p>
                    <input type="password" className='input-password w100'/>
					<label className=" mt3  container-check">
                        I have read and agree to the <a style={{color:'#016da1'}} href='https://metamask.io/terms.html' target="_blank">  Terms of Use</a>
                        <input type="checkbox" checked/>
                        <span className="checkmark"></span>
                    </label>
					<div className="row center">
                        <Link className='btn-puc'  to="/seed-phrase"  >Create</Link>
                    </div>
				</div>
			</div>  
		</Layout>	
	</>
}


export default CreatePassword;