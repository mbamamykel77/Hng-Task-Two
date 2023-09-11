import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please tell us your name"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
