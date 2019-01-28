import React from 'react';
import danPic from './assets/images/DanPic.jpg';

//function for Dans's about page section
const AboutDan = () => (
  <div>
	  <center>
	    <h2>Dan Andrei Iorga</h2>
	 	
	 		<img src={danPic} alt="Dan Andrei Iorga" width="400" height="425"/>
	   		<br/><br/>
			   	<p>
					Student at Fulda University of Applied Sciences.
				</p>
	  </center>
  </div>
);

export default AboutDan