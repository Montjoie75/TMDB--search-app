import React from "react";
import "./Header.css";


 const Header=({ inputValue, setInputValue})=> {
   
	
	return (
		<header>
			<div className="header-wrapper">
				<div className="container-headerLogo">
				<img  src="./cine.png" alt="" className="header-logo"></img>
				
				</div>
				<div className="search-box-container">	
						<input className="search-input" placeholder="Search for movies..." value={inputValue} onChange={(event)=>setInputValue(event.target.value)}>
						</input>
				</div>
			</div>
		</header>
	);
}
export default Header