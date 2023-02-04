import { NoteForm } from "./components/NoteForm";
import { NotesList } from "./components/NotesList";

export function AppContent() {
  return (
    <div className="max-w-xl m-auto h-screen py-40">
      <h1 className="text-5xl font-bold text-center py-5">Notes</h1>
      <NoteForm />
      <NotesList />
    </div>
  );
}
