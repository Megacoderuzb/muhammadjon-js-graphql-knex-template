import db from "../../db/index.js";
import { BadRequestError } from "../../shared/errors/index.js";

export const listUsers = async (query) => {
  const {
    q,
    offset = 0,
    limit = 5,
    sort_by = "id",
    sort_order = "desc",
    is_deleted = "",
  } = query;

  const filters = {};
  filters.is_deleted = is_deleted;

  try {
    let dbQuery = db("users").select(
      "id",
      "first_name",
      "last_name",
      "username"
    );

    if (q) {
      dbQuery = dbQuery
        .andWhere("first_name", "ilike", `%${q}%`)
        .orWhere("last_name", "ilike", `%${q}%`);
    }

    const total = await db("users").where(filters).count().first();
    const totalCount = total ? parseInt(total.count) : 0;

    dbQuery = dbQuery.orderBy(sort_by, sort_order).limit(limit).offset(offset);
    const users = await dbQuery;

    return {
      users,
      pageInfo: {
        total: totalCount,
        offset,
        limit,
      },
    };
  } catch (error) {
    throw new BadRequestError("Error fetching users from the database.");
  }
};
