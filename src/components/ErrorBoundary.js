import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = { 
			hasError: false
		}
	}

	//  When we  need to catch erros in component ErrorBoundary  there another component handler in React 16
	componentDidCatch(error, info){
		this.setState({hasError: true})
	}

	render(){
		if (this.state.hasError){
			return <h1>Ooops. Something went wrong</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
