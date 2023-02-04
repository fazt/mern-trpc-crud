import { NoteCard } from "./NoteCard";
import { NoteCreateOutput, trpc } from "../trpc";

export function NotesList() {
  const { data, isError, isLoading, error } = trpc.note.get.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      {(data || []).map((note: NoteCreateOutput) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
}
