import React, { Component } from "react";


export default class Login extends Component {





    constructor()
    {
        super();
        this.state={
            email:null,
            password:null,
         
        
        }
    }

    logout(){
        fetch("/api/v2/users/tokens", {
            method: "DELETE",
            body:JSON.stringify(this.state)
            
        }).then(res=>localStorage.setItem("jwt",res.headers.map.authorization));


       
 
            
    }


  
    login(){
        fetch("/api/v2/users/tokens", {
            method: "POST",
            body:JSON.stringify(this.state)
            
        }).then(res=>localStorage.setItem("jwt",res.headers.map.authorization));
       
 
            
    }
   


    render() {


        return (
          <div className="form-group">
          <h3 >Login</h3>
        
          <div className="form-group">
                        <label>Email</label><br></br>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>(this.setState({email:event.target.value}))}/>
                    </div>

    
         <div className="form-group">
                        <label>Password</label><br></br>
                        <input type="password"  className="form-control" placeholder="Enter password" onChange={(event)=>(this.setState({password:event.target.value}))}/>
                    </div>
           
            <button type="submit"  className="btn btn-dark btn-lg btn-block"onClick={()=>{this.login()}} >Sign In</button>
            <button type="submit"  className="btn btn-dark btn-lg btn-block"onClick={()=>{this.logout()}} >Logout</button> 

          <div>
          </div>
          </div>
        
        );
    }
}