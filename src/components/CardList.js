import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	return(
		// Everything put here is javascript including comments.  I could do like this befere:  {CardList}
		// This is another power of React. it makes you a good JS programmer
		<div>
		 	{
			   robots.map((user, i) => {   	// or use operational chaining operator.
			 // Every time we loop over array we need to give a key just for DOM to remember which one's which deleted for example.
				  return ( 
					 <Card 
						key = {i} 
						id = {robots[i].id} 
						name = {robots[i].name} 
						email = {robots[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList

//Key prop should have something that doesn't change. For example, index(or i in our case)
// Could change if array items get moved. So, a better in tnis case would be sothing unique like id.