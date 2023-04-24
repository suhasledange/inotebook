import React from 'react'

function NoteItem(props) {
    const {note} = props;
  return (
    <div>
        <div className="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <a href="#" className="btn btn-primary">Edit</a>
  </div>
  </div>
    </div>
  )
}

export default NoteItem
