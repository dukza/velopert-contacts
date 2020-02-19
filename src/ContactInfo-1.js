import React from 'react';

export default class ContactInfo extends React.Component{
    render(){
        return(
            <div onClick={this.props.onClick}>
                {this.props.contacts.name}
            </div>
        )
    }
}