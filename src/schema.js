import { z } from "zod";

export const formSchema = z.object({
  roles: z.string().min(1, "Select a role"),
  warehouses: z.string().min(1, "Select a warehouse"),
  emails: z
    .array(z.object({ value: z.string().email("Invalid email") }))
    .min(1, "At least one email is required"),
});
