import * as z from "zod";

const validNameRegex = new RegExp(/[A-Za-z]+[-'s]?[a-zA-Z ]+$/);

const formSchema = z.object({
  profilePhoto: z.string().url(),
  firstName: z.string().min(2).max(50).regex(validNameRegex).trim(),
  lastName: z.string().max(50).regex(validNameRegex).trim(),
  bio: z.string().min(3).max(1000).optional(),
});

export default formSchema;
