import React, { Component } from 'react';

export default class ContactDetails extends Component{
    render(){
        const details = (
            <div>
                <h2>{this.props.contact.name}</h2>
                <div>{this.props.contact.phone}</div>     
                <button>Delete</button>        
            </div>);
        const blank = (<h2>선택해 주세요</h2>);

        return(
            <>
                {this.props.isSelected ? details : blank}
                

            </>
        )
    }
}
ContactDetails.defaultProps={
    contact:{
        name:'',
        phone:''
    }
}
