import { z } from "zod";

export const BasicUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be 2 or more characters long" }),

  username: z
    .string()
    .trim()

    .toLowerCase()
    .min(4, { message: "username must be 4 or more characters long" }),

  email: z.string().email().trim().toLowerCase(),

  phone: z
    .string()
    .min(10, { message: "Phone numbers are a minimum of 10 digits" }),
  website: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: "URLs must be a minimum of 5 characters" })
    .refine((val) => val.indexOf(".") !== -1, { message: "Invalid URL" })
    .optional(),
  company: z.object({
    name: z
      .string()
      .trim()
      .min(5, { message: "Company name must be 5 or more characters long" }),
    catchPhrase: z.string().optional(),
  }),
});

const UserAddressSchema = z.object({
  street: z
    .string()
    .trim()
    .min(5, { message: "Street must be 5 or characters long" }),
  suite: z.string().trim().optional(),
  city: z
    .string()
    .trim()
    .min(2, { message: "City must be 2 or more characters long" }),
});