import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NoteForm from "./components/NoteForm";
import { NoteList } from "./components/NotesList";
import { trpc } from "./trpc";
import { httpBatchLink } from "@trpc/client";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
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
