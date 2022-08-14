import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Note {
  @prop()
  title: string;

  @prop()
  description: string;

  @prop({ default: false })
  done: boolean;
}

export default getModelForClass(Note);
