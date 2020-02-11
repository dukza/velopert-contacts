import React from 'react';
import ContactInfo from './ContactInfo';


export default class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            keyword:'',
          contacts:[
                {id:1, name:'A', phone:'010-0000-0001'},
                {id:2, name:'B', phone:'010-0000-0002'},
                {id:3, name:'C', phone:'010-0000-0003'},
                {id:4, name:'D', phone:'010-0000-0004'}
            ]  
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })      
    } 
    render(){
        const mapToComponent = (datas) => {
            datas.sort();
            datas = datas.filter((data)=>{
                return data.name.toLowerCase()
                .indexOf(this.state.keyword.toLowerCase())>-1
            })
            return datas.map((data,i)=>{
                return <ContactInfo contacts={data} key={i}/>
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
            </>
        );
    }
}