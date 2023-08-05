import db from "../../db/index.js";
import { BadRequestError } from "../../shared/errors/index.js";

export const addUser = async (payload) => {
  const existing = db("users").where({ username: payload.username }).first();

  if (existing) throw new BadRequestError("username already existit");

  return db("users").insert(payload).returning("*");
};
