import * as React from "react";

import { NoteModel } from "../models/note.model";
import Note from "./Note";

interface INotesListProps {
  notes: NoteModel[];
  setNotes: React.Dispatch<React.SetStateAction<NoteModel[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => (
      <Note key={note.id} note={note} handleDelete={handleDelete} />
    ));
  };

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
