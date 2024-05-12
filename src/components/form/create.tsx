'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { taskSchema } from '@/schemas/task';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import FormError from './form-error';
// import { login } from '@/actions/login';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

const CreateTaskForm = () => {
  const [pending, startTransintion] = React.useTransition();
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      description: '',
      important: false,
    },
  });

  async function handleSubmit(values: z.infer<typeof taskSchema>) {
    console.log(values);
    startTransintion(async () => {
      form.clearErrors();
      // const data = await login(values);
      // form.setError('root', { message: data?.error });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6"
        noValidate
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            disabled={pending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Title" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            disabled={pending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Type your description here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="important"
            disabled={pending}
            render={({ field }) => (
              <FormItem className="flex justify-between items-center">
                <FormLabel>Is it important?</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={form.formState.errors.root?.message} />
        <Button
          disabled={pending}
          className="w-full bg-secondary text-primary hover:bg-slate-200 hover:text-black"
          type="submit"
        >
          Create task
        </Button>
      </form>
    </Form>
  );
};

export default CreateTaskForm;
