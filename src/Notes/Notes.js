import React, { Component } from 'react';
import './Notes.scss';
import PropTypes from 'prop-types';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    render(props) {
        return (
            <div className="note fade-in">

                <p className="noteContent">{this.noteContent}</p>
            </div>
        )
    }
}
Notes.PropTypes = {
    noteContent: PropTypes.string
}
export default Notes;