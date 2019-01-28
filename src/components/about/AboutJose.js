import React from 'react';
import JosePic from './assets/images/JosePic.JPG';

//function for Jose's about page section
const AboutJose = () => (
  <div>
	  <center>
	  	<h2> Jose Medina</h2>

	    	<img src={ JosePic } alt="Jose Medina" width="400" height="400"/>
	    		<br/><br/>
			    <p> 
			     Hi my name is Jose Medina, I am a student at San Francisco State
			     University studying Computer Science.<br/> On my free time I like to work out and play sports.  
			    </p>
	  </center>			    
  </div>
);

export default AboutJose;
