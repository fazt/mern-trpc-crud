import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import { trpc } from "./trpc";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:3000/trpc",
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

function AppContent() {
  return (
    <div>
      <NoteForm />
      <NotesList />
    </div>
  );
}

export default App;
