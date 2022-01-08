import { ObjectId } from "mongoose";

export interface ResponseData {
  _id: ObjectId;
  image: string;
  company: string;
  condition?: string;
  job: string;
  timePosted: string;
  contract: string;
  location: string;
  tags: string[];
}
