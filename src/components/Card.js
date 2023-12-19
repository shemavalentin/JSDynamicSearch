import React from 'react';

//const Card = (props) => { 
const Card = ({name,email,id}) => {       //We can use destricturing over here too. and it's even more cleaner          
	//We can do like destructuring also form ES6
	//const {name, email,id} = props;
	return(
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		 <img alt = 'robot' src ={`https://robohash.org/${id}?200x200`} />
		  <div>			  
			  <h2>{name}</h2> 
			  <p>{email}</p>    			  
		  </div>
		</div>
	);
}

export default Card;