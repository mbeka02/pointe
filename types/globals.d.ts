export { };

// A type for the roles
export type Roles = "super-admin" | "admin" | "user";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
