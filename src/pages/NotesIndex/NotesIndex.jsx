import { useState } from 'react';
import { createNote } from '../../utilities/notes-api';
import NoteCard from '../../components/NoteCard/NoteCard';
import "./NotesIndex.css";

export default function NotesIndex({ notes, setNotes }) {
    const [inputData, setInputData] = useState({ text: "" });

    function handleChange(evt) {
        setInputData({ [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const note = await createNote(inputData);
            setNotes([...notes, note]);
        } catch (err) {
            // Error Handler
            throw new Error(err.message);
        }
        setInputData({ text: "" });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='NoteForm'>
                <input onChange={handleChange} value={inputData.text} placeholder='Type Note' name='text' />
                <button type='submit'>Submit</button>
            </form>
            <div className='NotesList'>
                {notes && notes.map((note, index) => (
                    <NoteCard key={index} note={note} />
                ))}
                {notes && notes.map((note, index) => (
                    <NoteCard key={index} note={note} />
                ))}
            </div>
        </>
    );
}