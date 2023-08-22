import { z } from "zod";

export const BasicUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be 2 or more characters long" }),

  username: z
    .string()
    .trim().toLowerCase()
    .min(4, { message: "username must be 4 or more characters long" }),

    email: z.string().email().trim().toLowerCase(),
});