import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
//import { robots } from './robots' ; // Once happened to have many variables I keep on adding to grab it. {robots, ....}
import './App.css'

//const App = () => { // Then in order to use state I have to transform this from function to class
class App extends Component{
	// To get use the state we need to declare a constructor.
    // States are things that define our app and are what describes our app. they alse live in the parent function
	constructor () {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}

		//console.log('constructor')
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({robots: users})});
		
		//console.log('componentDidMount');
	}

	onSearchChange = (event) => {
		//To update the state in react: 
		this.setState({searchfield: event.target.value})		
	}
	render () {
		const{ robots, searchfield } = this.state;
				   // Use .target.value to which gives us te value of the search term
		const filteredRobots =robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		}) 
			// When it is taking longer to display data on our page we can do something like the following
		return !robots.length ?
		<h1> Loading ...</h1>:
		(
			<div className = 'tc'>
				<h1 className = 'f1'> JS Dashboard Search </h1>
				<SearchBox searchChange = {this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
	    );	
	}	
}

export default App;