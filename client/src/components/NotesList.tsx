import { trpc } from "../trpc";
import NoteCard from "./NoteCard";

export function NotesList() {
  const getNotes = trpc.note.get.useQuery()

  if (getNotes.isLoading) return <div>Loading...</div>;

  return (
    <div>
      {(getNotes.data || []).map((note: any) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
}
