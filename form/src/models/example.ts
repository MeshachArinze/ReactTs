import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
mySchema.parse("Ekene"); // => "Ekene"
mySchema.parse(42); // => throws ZodError

// "safe" parsing (doesn't throw error if validation fails)
mySchema.safeParse("Ekene"); // => { success: true; data: "Ekene" }
mySchema.safeParse(42); // => { success: false; error: ZodError }

//////////////////////////////////
const schema = z.coerce.string();
schema.parse("Ekene"); // => "Dave"
schema.parse(42); // => "42"
schema.parse(true); // => "true"
