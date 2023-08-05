import { UnauthorizedError } from "../shared/errors/index.js";

export const isLoggedIn = (contextValue) => {
  if (!contextValue.user.id) {
    throw new UnauthorizedError("Unauthorized");
  }
};
