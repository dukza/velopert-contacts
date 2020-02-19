import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';

export default class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedKey:-1,
            keyword:'',
            contacts:[
                {id:'1', name:'A', phone:'010-0000-0001'},
                {id:'2', name:'B', phone:'010-0000-0002'},
                {id:'3', name:'C', phone:'010-0000-0003'},
                {id:'4', name:'D', phone:'010-0000-0004'}
            ]           
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick(key){
        this.setState({
            selectedKey:key
        })
        console.log(key,'is defined')
    } 
    handleCreate(contact){
        this.setState({
            contacts:update(
                this.state.contacts,{$push:[contact]}
            )
        })
    }
    handleRemove(){
        if(this.state.selectedKey < 0){
            return;
        }
        this.setState({
            contacts:update(
                this.state.contacts,{$splice:[[this.state.selectedKey,1]]}
            ),
            selectedKey:-1
        })
    }
    handleEdit(name,phone){
        this.setState({
             contacts:update(
                this.state.contacts,{
                    [this.state.selectedKey]:{
                        name : {$set:name},
                        phone: {$set:phone}
                    }
                }
            )           
        }

        )

    }
    render(){
        const mapToComponent = (datas) => {
            datas.sort();
            datas = datas.filter((data)=>{
                return data.name.toLowerCase()
                .indexOf(this.state.keyword.toLowerCase())>-1
            })
            return datas.map((data,i)=>{
                return <ContactInfo 
                contacts={data} 
                key={i}
                onClick={() => this.handleClick(i)}/>
            })
        }  
        return(
            <> 
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                {mapToComponent(this.state.contacts)}
                <ContactDetails isSelected={this.state.selectedKey !== -1}
                contact={this.state.contacts[this.state.selectedKey]}
                onRemove={this.handleRemove}
                onEdit = {this.handleEdit}
                />
                <ContactCreate onCreate={this.handleCreate}/>
            </>
        )
    }
}