'use server';
import * as z from 'zod';
import { taskSchema } from '@/schemas/task';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const createTask = async (values: z.infer<typeof taskSchema>) => {
  const validatedValues = taskSchema.safeParse(values);
  if (!validatedValues.success) {
    return { error: 'Invalid Fields' };
  }
  const { title, description, important } = validatedValues.data;

  try {
    await prisma.task.create({
      data: {
        title,
        description,
        completed: false,
        important,
      },
    });
  } catch (error: any) {
    if (error.message) return { error: error.message };
    return { error: 'Something went wrong!' };
  }
  revalidatePath('/');
};
export const deleteTask = async (id: string) => {
  if (!id) {
    return { error: 'Id not provided' };
  }

  try {
    await prisma.task.delete({ where: { id } });
  } catch (error: any) {
    if (error.message) return { error: error.message };
    return { error: 'Something went wrong!' };
  }
  revalidatePath('/');
};

export const editTask = async (
  values: z.infer<typeof taskSchema> & { id: string; completed?: boolean }
) => {
  const validatedValues = taskSchema.safeParse(values);
  if (!validatedValues.success) {
    return { error: 'Invalid Fields' };
  }
  const { title, description, important } = validatedValues.data;

  try {
    const task = await prisma.task.findUnique({
      where: {
        id: values.id,
      },
    });
    if (!task) throw new Error('There is no task with provided id');
    const isCompleted =
      typeof values.completed === 'undefined'
        ? {}
        : { completed: values.completed };
    await prisma.task.update({
      where: { id: values.id },
      data: { title, description, important, ...isCompleted },
    });
  } catch (error: any) {
    if (error.message) return { error: error.message };
    return { error: 'Something went wrong!' };
  }
  revalidatePath('/');
};
