import { Schema, model } from "mongoose";

type IStat = {
  country_name: string;
  cases?: number;
  deaths?: number;
};

export const Stat = model<IStat>(
  "stat",
  new Schema({
    country_name: String,
    cases: Number,
    deaths: Number,
  })
);
