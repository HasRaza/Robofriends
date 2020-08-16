import React,{ Component } from 'react';


class error extends  Component{
	constructor(props){
		super(props);
		this.state={
			hasError:false
		}
	}

	ComponetsDidit(error,info){
		this.setstate({hasError:true})
	}

	render(){
		if(this.state.hasError){
			return <h1>sorry.again later</h1>
		}
		return this.props.chlidren
	}
}

export default error;
