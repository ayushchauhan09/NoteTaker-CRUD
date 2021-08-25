import React from 'react';
import {Link} from 'react-router-dom';


const Note = (props) => {
    return(
        <tr>
            <td>{props.currentNote.username}</td>
            <td>{props.currentNote.description}</td>
            <td>{props.currentNote.duration}</td>
            <td>{props.currentNote.date.substring(0,10)}</td>
            <td>
                   <Link to={`/edit/${props.currentNote._id}`}> EDIT </Link>
                 | <a href="." onClick={() => props.deleteNote(props.currentNote._id)}>DELETE</a>
            </td>
        </tr>
    )
}

export default Note;