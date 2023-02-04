import { publicProcedure, router } from "../trpc";
import Note from "../models/note";
import { z } from "zod";

const getNotes = publicProcedure.query(async () => {
  const notes = await Note.find();
  return notes;
});

const createNotes = publicProcedure
  .input(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  )
  .mutation(async ({ input: { title, description } }) => {
    const newNote = new Note({ title, description });
    const savedNote = await newNote.save();
    return savedNote;
  });

const deleteNote = publicProcedure
  .input(z.string())
  .mutation(async ({ input }) => {
    const deletedTask = await Note.findByIdAndDelete(input);
    if (!deletedTask) throw new Error("Note not found");
    return true;
  });

const toggleDone = publicProcedure
  .input(z.string())
  .mutation(async ({ input }) => {
    try {
      const foundNote = await Note.findById(input);
      if (!foundNote) throw new Error("Note not found");
      foundNote.done = !foundNote.done;
      await foundNote.save();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  });

export const notesRouter = router({
  create: createNotes,
  delete: deleteNote,
  get: getNotes,
  toggleDone
});
