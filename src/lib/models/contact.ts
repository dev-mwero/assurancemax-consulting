import mongoose, { type Document, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  service?: string;
  message: string;
  status: "pending" | "read" | "replied";
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    organization: { type: String, trim: true },
    service: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["pending", "read", "replied"],
      default: "pending",
    },
  },
  { timestamps: true },
);

export const Contact =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);
