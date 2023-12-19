import React from 'react'



//Here we need to use destructuring ({}) to allow us to grab the props object and grab its properties.
// Then the searchField will be removed.

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className = 'pa2'>
			<input
			className = 'pa3 ba b--green bg-lightest-blue'
			type = 'search' 
			placeholder = 'seach box'
			onChange = {searchChange}
			/>
		</div>
		);
}

export default SearchBox;