import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';

export default class NotesList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      notes:[]
    }
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidMount(){

    axios.get('/notes')
          .then(res => {
            this.setState({notes:res.data})
          })
          .catch(error => console.log(`Error: ${error}`))
  }

  deleteNote(id){
    axios.delete(`/notes/${id}`)
     .then(res => console.log(res));

     this.setState({
       notes:this.state.notes.filter(note => note._id !== id)
     })
  }
  NoteList(){
    return this.state.notes.map(note => {
      return <Note currentNote={note} deleteNote={this.deleteNote} key={note._id} />
    })
  }

  render() {
    return (
      <div className="container">
  <h3>Notes List</h3>
  <table className="table table-bordered">
    <thead className="thead-light">
      <tr>
        <th>Username</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { this.NoteList() }
    </tbody>
  </table>
</div>
    )
  }
}