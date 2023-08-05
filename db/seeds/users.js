import bcryptjs from "bcryptjs";

export const seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          // id: 1,
          first_name: "Eshmat",
          last_name: "toshmat",
          username: "eshmat",
          password: bcryptjs.hashSync("1234", 10),
        },
        {
          // id: 2,
          first_name: "toshmat",
          last_name: "eshmat",
          username: "toshmat",
          password: bcryptjs.hashSync("1234", 10),
        },
      ]);
    });
};
