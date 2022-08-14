import { trpc } from "../trpc";

function NoteCard({ note }: any) {
  const deleteNote = trpc.useMutation(["deleteNote"]);
  const toggleNoteDone = trpc.useMutation(["toggleDone"]);
  const context = trpc.useContext();

  const onDeleteNote = () => {
    deleteNote.mutate(note._id, {
      onSuccess(data) {
        if (data) {
          context.invalidateQueries(["getNotes"]);
        }
      },
      onError(error) {
        alert(error.message);
      },
    });
  };

  const onToggleDone = () => {
    toggleNoteDone.mutate(note._id, {
      onSuccess(data) {
        if (data) {
          console.log(data)
          context.invalidateQueries(["getNotes"]);
        }
      },
    });
  };

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <button onClick={() => onDeleteNote()}>
        {deleteNote.isLoading ? "Loading..." : "Delete"}
      </button>

      <button onClick={() => onToggleDone()}>
        {note.done ? "Undone" : "Done"}
      </button>
    </div>
  );
}

export default NoteCard;
