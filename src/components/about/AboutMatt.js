import React from 'react';
import mattPic from './assets/images/MattPic.png';

//function for Matts's about page section
const AboutMatt = () => (
  	<div>
	  	<center>
		    <h2>Matthew Farrer</h2>

		      <img src={ mattPic } alt="Matthew Farrer" width="400" height="400"/>
		      <br/><br/>
			    <p> 
				    Matt Farrer studies computer science at San Francisco State University.
				    He likes reading, music, and long walks.
			    </p>
		</center>  
	</div>
);

export default AboutMatt;
