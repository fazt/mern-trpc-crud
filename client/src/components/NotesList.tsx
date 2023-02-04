import { NoteCard } from "./NoteCard";
import { trpc } from "../trpc";

export function NotesList() {
  const { data, isError, isLoading, error } = trpc.note.get.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      {(data || []).map((note: any) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
}
