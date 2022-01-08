import { Schema, models, model, Types } from "mongoose";
import { ResponseData } from "types";

const jobSchema = new Schema<ResponseData>({
  _id: { type: Types.ObjectId, required: true },
  image: { type: String, required: true },
  company: { type: String, required: true },
  condition: { type: String, required: true },
  job: { type: String, required: true },
  timePosted: { type: String, required: true },
  contract: { type: String, required: true },
  location: { type: String, required: true },
  tags: { type: [String], required: true },
});

export default models.Job || model("Job", jobSchema);
