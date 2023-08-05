import db from "../../db/index.js";
import bcryptjs from "bcryptjs";
import { NotFoundError } from "../../shared/errors/index.js";

export const editUser = async ({ id, ...changes }) => {
  const user = await db("users").where({ id, is_deleted: false }).first();

  if (!user) throw new NotFoundError("User not found");

  let hashPassword = {};
  if (changes.password)
    hashPassword.password = await bcryptjs.hash(changes.password, 10);

  return (
    await db("users")
      .where({ id })
      .update({ ...changes, ...hashPassword })
      .returning("*")
  )[0];
};
