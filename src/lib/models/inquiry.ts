import mongoose, { type Document, Schema } from "mongoose";

export interface IInquiry extends Document {
  name: string;
  email: string;
  organization?: string;
  serviceInterest: string;
  preferredContact: "email" | "phone" | "either";
  message: string;
  status: "pending" | "contacted" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

const inquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    organization: { type: String, trim: true },
    serviceInterest: { type: String, required: true, trim: true },
    preferredContact: {
      type: String,
      enum: ["email", "phone", "either"],
      required: true,
    },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["pending", "contacted", "closed"],
      default: "pending",
    },
  },
  { timestamps: true },
);

export const Inquiry =
  mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", inquirySchema);
