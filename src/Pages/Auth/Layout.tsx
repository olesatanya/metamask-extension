import React from 'react';
import {Link} from "react-router-dom"; 


const Layout = (props : any) => {
	return <>
		<div style = {{backgroundImage : `url(${'../../assets/img/welcome_back.png'})`, width:'100vw', height:'100vh', backgroundSize : '100% 100%', minHeight:'100%'}}>
			<div className='logo'><img src="../../assets/img/logo.png"></img></div>
			{props.children}
			
      	</div>
	</>
}

export default Layout;