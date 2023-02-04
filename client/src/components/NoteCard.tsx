import { trpc } from "../trpc";

export function NoteCard({ note }: any) {
  const deleteNote = trpc.note.delete.useMutation();
  const toggleNoteDone = trpc.note.toggleDone.useMutation();
  const context = trpc.useContext();

  const onDeleteNote = () => {
    deleteNote.mutate(note._id, {
      onSuccess(data) {
        if (data) {
          context.note.get.invalidate();
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
          context.note.get.invalidate();
        }
      },
    });
  };

  return (
    <div className="bg-zinc-800 p-2 mb-2 flex">
      <div>
        <h1 className="font-bold text-xl">{note.title}</h1>
        <p>{note.description}</p>
      </div>
      <button
        onClick={() => onDeleteNote()}
        className="bg-red-500 px-3 py-2 rounded-md text-white ml-auto"
      >
        {deleteNote.isLoading ? "Loading..." : "Delete"}
      </button>

      <button
        onClick={() => onToggleDone()}
        className={`px-3 py-2 rounded-md text-white ml-2 ${
          note.done ? "bg-zinc-500" : "bg-green-500"
        }`}
      >
        {note.done ? "Undone" : "Done"}
      </button>
    </div>
  );
}
