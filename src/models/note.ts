import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Note {
  @prop({
    type: String,
  })
  title: string;

  @prop({
    type: String,
  })
  description: string;

  @prop({ type: Boolean, default: false })
  done: boolean;
}

export default getModelForClass(Note);
