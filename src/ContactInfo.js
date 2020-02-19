import React from 'react';

export default class ContactInfo extends React.Component{
    render(){
        return(
            <div>
                {this.props.contacts.name} {this.props.contacts.phone} 
            </div>
        )
    }
}