import React from 'react'


function Note(props) {
    // console.log(props)
    return <li>{ props.note.content}</li>
    // console.log(props)
}

export default Note;
