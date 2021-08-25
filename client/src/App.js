import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "./components/Navbar"
import NotesList from "./components/NotesList";
import EditNote from "./components/EditNote";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <br/>
        <Route path="/" component={NotesList} exact />
        <Route path ="/edit/:id" component={EditNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
} 

export default App;
