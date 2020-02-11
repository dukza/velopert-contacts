import React, { Component } from 'react';

export default class ContactDetails extends Component{
    render(){
        const details = (
            <div>
                <h2>{this.props.contact.name}</h2>
                <div>{this.props.contact.phone}</div>            
            </div>);
        const blank = (<div>blank</div>);

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
