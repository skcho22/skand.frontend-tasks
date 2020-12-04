import React, { Component } from "react";


export default class Delete extends Component {





    constructor()
    {
        super();
        this.state={
            id : null,
            email: null,
            first_name: null,
            last_name: null,
            jobs_count: null,
            active: null,
            slack_username: null
       
         
        
        }
    }




  
    delete(){

        const token = localStorage.getItem('jwt');


        fetch("/api/v2/users/:id", {
            headers: { Authorization: token, },
            method: "DELETE",
            body:JSON.stringify(this.state)
            
        })
 
            
    }
   


    render() {
        return (
            <div className="form-group">
            <h3 >Delete User</h3>
        
      
            <div className="form-group">
                        <label> User Id</label><br></br>
                        <input type="id"  className="form-control" placeholder="Enter user ID" onChange={(event)=>(this.setState({id:event.target.value}))}/>
                    </div><br></br>

                    
            <button type="submit"  className="btn btn-dark btn-lg btn-block"onClick={()=>{this.delete()}} >Delete User</button><br></br><br></br>

          <div>
          </div>
          </div>
        
        );
    }
}