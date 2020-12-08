import React from 'react';
import Note from '../Components/Note';
class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }
    // Went with the function route, using the this syntax and calling the method within the ul to implement it
    renderNotes = () => {
        return this.apiResponse().map(renderedNote => {
            return <Note note = {renderedNote}/>
        })
    }
    render() {
        return (
            <ul>
                {this.renderNotes()}
            </ul>
        )
    }

}

export default NotesContainer;

