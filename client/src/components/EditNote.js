import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "../../node_modules/react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      description:'',
      duration:0,
      date:new Date(),
      users:[]
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  componentDidMount(){
   
    axios.get(`/notes/${this.props.match.params.id}`)
          .then(res => {
                 this.setState({
                  username: res.data.username,
                  description: res.data.description,
                  duration: res.data.duration,
                  date: new Date(res.data.date)
                 })
              
            }
          )

        axios.get('/users')
          .then(res => {
              if(res.data.length > 0) {
                 this.setState({
                   users: res.data.map(user=>user.username),
                 })
              }
            }
          )
  }

  handleChange(e){
    this.setState({
      [e.target.id] : e.target.value
    });
  }

  handleChangeDate(date){
    this.setState({
      date
    });
  }

   onSubmit(e){
     e.preventDefault();

     const notes = {
       username:this.state.username,
       description:this.state.description,
       duration:this.state.duration,
       date:this.state.date
     }

     axios.post(`/notes/update/${this.props.match.params.id}`,notes)
          .then(res => console.log(res.data));

     window.location = '/';
   }
  

  render() {
    const {username, description, duration,date, users} = this.state;
    return (
      <div className="container">
        <h3>Edit Note</h3><hr/>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="username">User</label>
          <select className="form-control"
                   id="username" 
                   value={username} 
                   onChange={this.handleChange}>
            {
              users.map(user => <option key={user} value={user}>{user}</option>)
            }
         </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
                 className="form-control" 
                 id="description"
                 value={description}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input type="text" 
                 className="form-control" 
                 id="duration" 
                 value={duration}
                 onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <div>
            <DatePicker id="date"
                      placeholder="date"
                      selected={date}
                      onChange={this.handleChangeDate} />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}