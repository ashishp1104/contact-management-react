import React from "react";

class AddContact extends React.Component{
state={
    name:"",
    email:"",
};

    

    add=(e)=>{
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("All the fields are mandatory");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        
    }
    render(){
        return(
            <div className="ui main">
                  

               <h2>Add Contact</h2> 
               <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                     <input type="text" placeholder="search for Contacts..." className="search-input"
            // value={searchQuery}
            // onChange={(e)=> setSearchQuery(e.target.value)}
            />
            <button type="submit" className="ui button blue ">Search</button>
                </div>

                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="name"
                    value={this.state.name}
                    onChange={(e)=>this.setState({name: e.target.value})}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"
                     value={this.state.email}
                    onChange={(e)=>this.setState({email: e.target.value})}
                    />
                </div>
                        <button className="ui button blue">Add</button>
                        <div style={{ padding: '20px' }}></div>


                
               </form>
                         
            </div>
            
        )
    }
    
    

}
export default AddContact;