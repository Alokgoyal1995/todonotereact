import React, { Component } from 'react';
import './App.css';
import Notes from './Notes/Notes';
import Notesfrom from './Notesform/Notesform';
class App extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.state = {
      notes: [
        { id: 1, noteContent: "note 1 here" },
        { id: 2, noteContent: "note 2 here" },
      ],
    }

  }

  addNote(note) {
    // this.state.notes.push(note);
    const priviousNotes = this.state.notes;
    priviousNotes.push({ id: priviousNotes.length + 1, noteContent: note });
    this.setState({
      notes: priviousNotes
    });
  }
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & firebase To-Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Notes noteContent={note.noteContent} noteId={note.id} key={note.id} />
              )
            })
          }

        </div>
        <div className="notesFooter">
          <Notesfrom addNote={this.addNote} />
        </div>

      </div>
    );
  }
}

export default App;









