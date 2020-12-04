import React, { Component } from "react";



export default class Userindex extends Component {



    constructor()
    {
        super();
        this.state={
            email:null,
            password:null,
            items: [],
         
        
        }
    }

  
    showuserindex(){


        const token = localStorage.getItem('jwt');

        fetch("/api/v2/users", {
            headers: { Authorization: token, },
            method: "GET",
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

        const { items } = this.state;
        const token = localStorage.getItem('jwt');


        if (token==='undefined'){
          return(
            <div>"PLease Login!</div>
          )
        }
        else{

        return (
          <div className="form-group">
          <h3>All Users</h3>

   
            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={()=>{this.showuserindex()}} >Show User Index</button><br></br><br></br>
            <ul>
            {items.map(item => (
              <li key={item.id}>
                Email: {item.email}<br></br> User ID: {item.id}<br></br> Jobs Count: {item.jobs_count}<br></br> Active state:{item.active}
              </li>
            ))}
          </ul>         
       
          </div>
        
          
            
        );
            }
    }
  }
