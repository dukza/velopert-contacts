import React from 'react';
import ContactInfo from './ContactInfo';
// import ContactDetails from './ContactDetails';
// import update from 'react-addons-update';
// import ContactCreate from './ContactCreate';

export default class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts:[
                {id:1 , name:'A', phone:'010-0000-0000'},
                {id:2 , name:'B', phone:'010-0000-0001'},
                {id:3 , name:'C', phone:'010-0000-0002'},
                {id:4 , name:'D', phone:'010-0000-0003'}
            ]

        }
    }
    
    render(){
        const mapToComponent = (datas) => {
            return datas.map((data,i)=>{
                return <ContactInfo 
                contacts={data}
                key={i}
                />
            })
        }
        return(
            <> 
                <h1>Contacts</h1>
                {mapToComponent(this.state.contacts)}
            </>
        )
    }
}