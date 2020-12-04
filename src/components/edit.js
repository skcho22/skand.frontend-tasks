import React, { Component } from "react";


export default class Edit extends Component {



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


  
    edit(){

        const token = localStorage.getItem('jwt');


        fetch("/api/v2/users/:id", {
            headers: { Authorization: token, },
            method: "PATCH",
            body:JSON.stringify(this.state)
            
        })
 
            
    }
   


    render() {
        return (
            <div className="form-group">
            <h3 >Edit User Details</h3>
        
      
            <div className="form-group">
                        <label> User Id</label>
                        <input type="id"  className="form-control" placeholder="Enter user ID" onChange={(event)=>(this.setState({id:event.target.value}))}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label><br></br>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>(this.setState({email:event.target.value}))}/>
                    </div>
    
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="first_name"  className="form-control" placeholder="Enter First Name" onChange={(event)=>(this.setState({first_name:event.target.value}))}/>
                    </div>
           
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="last_name"  className="form-control" placeholder="Enter Last Name" onChange={(event)=>(this.setState({last_name:event.target.value}))}/>
                    </div>


                    <div className="form-group">
                        <label>Job Count</label>
                        <input type="job_count"  className="form-control" placeholder="Enter Job Count" onChange={(event)=>(this.setState({job_count:event.target.value}))}/>
                    </div>

                    <div className="form-group">
                        <label>Active</label>
                        <input type="active"  className="form-control" placeholder="Enter True or False" onChange={(event)=>(this.setState({active:event.target.value}))}/>
                    </div>

                    <div className="form-group">
                        <label>Slack Username</label>
                        <input type="slack_username"  className="form-control" placeholder="Enter Slack username" onChange={(event)=>(this.setState({slack_username:event.target.value}))}/>
                    </div>
            <button type="submit"  className="btn btn-dark btn-lg btn-block"onClick={()=>{this.edit()}} >Update Details</button>

          <div>
          </div>
          </div>
        
        );
    }
}