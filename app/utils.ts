import { Roles } from "@/types/globals";
import { User, auth } from "@clerk/nextjs/server";

export const checkRole = (role: Roles) => {
  const { sessionClaims } = auth();

  return sessionClaims?.metadata.role === role;
};

export const filterUserList = (users: User[], userId: string): User[] => {
  const filteredArray = users.filter((user) => user.id === userId);
  return filteredArray;
};
