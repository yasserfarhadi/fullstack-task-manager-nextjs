import * as z from 'zod';

export const taskSchema = z.object({
  title: z.string().min(3).max(40),
  description: z.string().min(20),
  important: z.boolean(),
});
