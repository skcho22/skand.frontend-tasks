import React, { Component} from "react";



export default class Userdetails extends Component {




    constructor()
    {
        super();
        this.state={
            
            id:null,
            items: [],
         
        
        }
    }


            

  
    showuserindex(){

      const token = localStorage.getItem('jwt');


      fetch("/api/v2/users/:id", {
          headers: { Authorization: token, },
          method: "POST",
          body:JSON.stringify(this.state)
          
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.users
            
            
          });

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            
            error
          });
        }
      )
        
            
    }
   


    render() {

  


 const list =this.state.items;




 if ( list.length===0 )

{             return(

  <div className="form-group">
  <h3 >Show User Details</h3>

<div className="form-group">
              <label> User ID</label><br></br>
              <input type="id" className="form-control" placeholder="Enter user id" onChange={(event)=>(this.setState({id:event.target.value}))}/>
          </div>
  <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={()=>{this.showuserindex()}} >Get user details</button>

  </div>
)     }



else {


           
        return (


          <div className="form-group">


       
       <h1 >User Details</h1>

            <p>
          User ID :<br></br> {this.state.items.id}<br></br>
          Email:<br></br>{this.state.items.email}<br></br>
          First Name:<br></br>{this.state.items.first_name}<br></br>
          Last Name:<br></br>{this.state.items.last_name}<br></br>
          Active:<br></br>{this.state.items.active}<br></br>
          Job Count: <br></br>{this.state.items.jobs_count}<br></br>
          Slack Username:<br></br> {this.state.items.slack_username}
        

            </p>

          </div>
          
            
        );}

        
        }
       
            
    }

