import React, { Component } from 'react';
import propType from 'prop-types';
export default class ContactDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit : false,
            name :'',
            phone:''
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleToggle(){
        if(!this.state.isEdit){
            this.setState({
                name:this.props.contact.name,
                phone:this.props.contact.phone
            })           
        }else{
            this.handleEdit();
        }
        this.setState({
            isEdit:!this.state.isEdit
        })
    }
    handleEdit(){
        this.props.onEdit(this.state.name, this.state.phone)
    }
    handleChange(e){
        let nextState = {};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState)
    }
    render(){
        const detail = (
            <>
            <h2>{this.props.contact.name}</h2>            
            <div>{this.props.contact.phone}</div>  
            </>          
        )
        const edit = (
            <>
                <h2>Edit</h2>
                <p>
                    <input type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </p>
            </>
        )
        const view = this.state.isEdit ? edit:detail;
        const blank = (
            <h2>선택해주세요</h2>            
        )
        return(
            <>
                {this.props.isSelected ? view : blank}
                <div>
                    <button onClick={this.handleToggle}>{this.state.isEdit ? 'ok' : 'Edit' }</button>
                    <button onClick={this.props.onDelete}>Delete</button>
                </div>
            </>
        )
    }
}

ContactDetail.defaultProps = {
    contact:{
        name:'',
        phone:''
    }
}