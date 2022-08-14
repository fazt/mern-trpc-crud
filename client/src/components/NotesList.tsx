import { trpc } from "../trpc";
import NoteCard from "./NoteCard";

function NotesList() {
  const getNotes = trpc.useQuery(["getNotes"]);

  if (getNotes.isLoading) return <div>Loading...</div>;

  return (
    <div>
      {(getNotes.data || []).map((note: any) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
}

export default NotesList;
