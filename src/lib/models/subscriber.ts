import mongoose, { type Document, Schema } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
  status: "active" | "unsubscribed" | "bounced";
  createdAt: Date;
}

const subscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["active", "unsubscribed", "bounced"],
      default: "active",
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

export const Subscriber =
  mongoose.models.Subscriber ||
  mongoose.model<ISubscriber>("Subscriber", subscriberSchema);
