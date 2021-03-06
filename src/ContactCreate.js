import React, { Component } from 'react';

export default class ContactCreate extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            phone:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        let nextState = {};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState)
    }
    handleClick(e){
        const contact={
            name: this.state.name,
            phone:this.state.phone
        }
        this.props.onCreate(contact);
        this.setState({
            name:'',
            phone:''
        })
    }
    render(){
        return(
            <>
                <h2>Create</h2>
                <input
                type="text"
                placeholder="name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                />
                <input
                type="text"
                placeholder="phone"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
                />
                <button
                    onClick={this.handleClick}
                >Create</button>
            </>
        )
    }
}