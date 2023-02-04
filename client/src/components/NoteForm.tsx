import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { trpc } from "../trpc";

const initialState = {
  title: "",
  description: "",
};

export function NoteForm() {
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
    <form onSubmit={handleSubmit} className="bg-zinc-900 p-10 rounded-md">
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
        value={note.title}
        ref={titleRef}
        autoFocus
        className="bg-neutral-800 px-3 py-2 block w-full rounded-md mb-3"
      />
      <textarea
        placeholder="Description"
        name="description"
        onChange={handleChange}
        value={note.description}
        className="bg-neutral-800 px-3 py-2 block w-full rounded-md mb-3"
        rows={3}
      />

      <button
        className="bg-zinc-500 px-3 py-2 rounded-md text-white"
      >Save</button>
    </form>
  );
}
