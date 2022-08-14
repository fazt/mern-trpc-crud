import * as trpc from "@trpc/server";
import Note from "../models/note";
import { z } from "zod";

export const notesRoutes = trpc
  .router()
  .query("getNotes", {
    async resolve() {
      const notes = await Note.find();
      return notes;
    },
  })
  .mutation("createNote", {
    input: z.object({
      title: z.string(),
      description: z.string(),
    }),
    async resolve({ input: { title, description } }) {
      const newNote = new Note({ title, description });
      const savedNote = await newNote.save();
      return savedNote;
    },
  })
  .mutation("deleteNote", {
    input: z.string(),
    async resolve({ input }) {
      const deletedTask = await Note.findByIdAndDelete(input);
      if (!deletedTask) throw new Error("Note not found");
      return true;
    },
  })
  .mutation("toggleDone", {
    input: z.string(),
    async resolve({ input }) {
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
    },
  });
