import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const removeUser = async ({ id }) => {
  const user = await db("users").where({ id, is_deleted: false }).first();
  if (!user) throw new NotFoundError("User not found");

  return await db("users")
    .where({ id, is_deleted: false })
    .update({ is_deleted: true })
    .returning("*")
    .first();
};
