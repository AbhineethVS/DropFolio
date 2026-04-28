import mongoose from "mongoose";

const statsSchema = new mongoose.Schema(
  {
    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Portfolio",
      required: true,
      index: true,
    },
    slug: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    visitorIp: {
      type: String,
      required: true,
      trim: true,
    },
    userAgent: {
      type: String,
      default: "",
      trim: true,
    },
    visitedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: false,
  },
);

const Stats = mongoose.models.Stats || mongoose.model("Stats", statsSchema);

export default Stats;
