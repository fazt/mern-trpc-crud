import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { trpc } from "../trpc";

const initialState = {
  title: "",
  description: "",
};

function NoteForm() {
  const [note, setNote] = useState(initialState);
  const addNote = trpc.note.create.useMutation();
  const utils = trpc.useContext();
  const titleRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setNote({ ...note, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote.mutate(note, {
      onSuccess: () => {
        // utils.invalidateQueries(["getNotes"]);
        utils.note.get.invalidate()
        setNote(initialState);
        titleRef.current?.focus();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
        value={note.title}
        ref={titleRef}
        autoFocus
      />
      <textarea
        placeholder="Description"
        name="description"
        onChange={handleChange}
        value={note.description}
      />

      <button>Save</button>
    </form>
  );
}

export default NoteForm;
