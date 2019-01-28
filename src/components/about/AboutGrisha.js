import React from 'react';
import grishaPic from './assets/images/grishaPic.png';

//function for Grisha's about page section
const AboutGrisha = () => (
  <div>
	  <center>
	    <h2>Grisha Kapil</h2>
	 	
	 		<img src={ grishaPic } alt="Grisha Kapil" width="400" height="425"/>
	   		<br/><br/>
			   	<p>
				I am a student at San Francisco State University studying computer science. 
				My goal is to work on<br/>  more projects so that I can gain expierence on how to design sleek, 
				modern, and responsive software<br/> that leads to a fun and exciting user expierence. If you
				catch me away from my computer I might be<br/> going for hike, watching one of my favorite TV series, 
				or listening to a cool new podast! 
				</p>
	  </center>
  </div>
);

export default AboutGrisha