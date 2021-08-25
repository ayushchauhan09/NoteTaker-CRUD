import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    const newUser = {
      username:this.state.username
    }

    axios.post('/users/add',newUser)
          .then(res => console.log(res.data));
    
    this.setState({username:''});

    window.location = '/';
  }

  render() {
    return (
      <div className="container ">
          <h3>Create New User</h3> <hr/>
          <form className="form-box " onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" 
                    className="form-control" 
                    id="username" 
                    value={this.state.username}
                    onChange={this.handleChange} />
            </div>
        
          <button type="submit" className="btn btn-primary ">Submit</button>
       </form>
    </div>
    )
  }
}