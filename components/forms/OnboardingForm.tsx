"use client";

import formSchema from "@/lib/validations/onboarding";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";

export default function OnboardingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profilePhoto: "",
      firstName: "",
      lastName: "",
      bio: "",
    },
  });

  function onSubmit() {
    // TODO: place a submit action
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="profilePhoto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Photo</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="add profile photo"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Choose a photo that best describes you.
              </FormDescription>
              <FormMessage>Invalid image format</FormMessage>
            </FormItem>
          )}
        />

        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane" type="text" {...field} />
                </FormControl>
                <FormMessage>Invalid name</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" type="text" {...field} />
                </FormControl>
                <FormMessage>Invalid name</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="flying dragons" />
              </FormControl>
              <FormDescription>
                Tell people more about yourself.
              </FormDescription>
              <FormMessage>Invalid bio</FormMessage>
            </FormItem>
          )}
        />

        <Button className="w-full">Let&apos;s get started 🎉</Button>
      </form>
    </Form>
  );
}
