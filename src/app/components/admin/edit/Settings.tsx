"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Cog, Loader2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { usePost } from "@/hooks/usePostContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "@/hooks/useSessionContext";
import { Input } from "@/components/ui/input";

const settingsSchema = z.object({
  name: z.string().optional(),
  featuredImageId: z.string().optional(),
  postCategories: z.any().optional(),
});

type SettingValues = z.infer<typeof settingsSchema>;

export default function Settings() {
  const { post } = usePost();
  const { session } = useSession();
  const [state, setState] = useState<"LOADING" | "IDLE">("IDLE");

  const form = useForm<SettingValues>({
    resolver: zodResolver(settingsSchema),
  });
  const onSubmit = async () => {};

  return (
    <Sheet>
      <SheetTrigger>
        <Cog />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Post Settings</SheetTitle>
          <SheetDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            autoComplete="off"
                            placeholder="enter name"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="featuredImageId"
                  render={({ field }) => {
                    return (
                      <FormItem className="grow">
                        <FormLabel>Category</FormLabel>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </form>
            </Form>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="mt-auto">
          <Button className="w-full">Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
