import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ContactDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit:false,
            name:'',
            phone:''
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
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
            isEdit: !this.state.isEdit,
        }) 
        console.log(this.state.isEdit)
    }    
    handleChange(e){
        let nextState = {};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState)
    }
    handleEdit(){
        this.props.onEdit(this.state.name, this.state.phone)
    }
    render(){
        const details = (
            <>
                <h2>{this.props.contact.name}</h2>
                <div>{this.props.contact.phone}</div>     
 
            </>
            );

        const edit = (
            <>
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
        const view = this.state.isEdit ? edit:details;
        const blank = (<h2>선택해 주세요</h2>);

        return(
            <>
                {this.props.isSelected ? view : blank}
                <div>
                    <button onClick={this.handleToggle}>{this.state.isEdit ? 'Ok' : 'Edit'}</button>
                    <button onClick={this.props.onRemove}>Remove</button>      
                </div>            
            </>
        )
    }
}
ContactDetails.defaultProps={
    contact:{
        name:'',
        phone:''
    },
    onRemove:() => {console.error('Remove not defined');},
    onEdit:() => {console.error('Edit not defined');}
}

ContactDetails.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,

}
