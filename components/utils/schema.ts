import * as z from "zod";

export const commentSchema = z.object({
  user_name: z.string().nonempty("Username is required"),
  user_email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
  comment: z.string().nonempty("Comment is required"),
});
