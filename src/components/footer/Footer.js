import React from 'react';

const Footer = () => (
    <footer style={footerStyle} className="footer">
      <div className="container">
        <p className="text-muted">
        Software Engineering Class &bull;
    		Fall 2018 &bull;
    		Section 1 &bull;
    		Team 07
        </p>
      </div>
    </footer>
)

const footerStyle = {
	  position: "absolute",
	  fontSize: "15px",
  	bottom: "0",
  	width: "100%",
  	/* Set the fixed height of the footer here */
  	height: "60px",
  	backgroundColor: "#333",
  	textAlign: "center"
}

export default Footer