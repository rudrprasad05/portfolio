"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { buttonVariants } from "@/components/ui/button";
import { Loader2, Plus, Router } from "lucide-react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { NewCategory } from "@/actions/category";
import { useRouter } from "next/navigation";

export default function NewTagModal() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"LOADING" | "IDLE">("IDLE");
  const router = useRouter();

  const NewTagSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Tag must contain more than 2 characters" })
      .max(32, { message: "Tag must have less than 2 characters" }),
  });

  type ChangePasswordFormType = z.infer<typeof NewTagSchema>;

  const form = useForm<ChangePasswordFormType>({
    resolver: zodResolver(NewTagSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: ChangePasswordFormType) => {
    setState("LOADING");
    try {
      const res = await NewCategory(data.name).then((r) => {
        setState("IDLE");
        setOpen(false);
        router.refresh();
        toast.success("New Tag created");
      });
    } catch (error) {
      setState("IDLE");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className={`flex items-center justify-between gap-3   cursor-pointer ${buttonVariants(
            {
              variant: "default",
            }
          )}`}
        >
          <Plus />
          <p>New</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Category</DialogTitle>
          <DialogDescription>Create New Category</DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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

              <div className="flex items-center gap-4">
                <Button
                  disabled={state == "LOADING"}
                  className="w-full"
                  type="submit"
                >
                  {state == "LOADING" && (
                    <Loader2 className={"animate-spin mr-3"} />
                  )}
                  Confirm
                </Button>
                <Button
                  onClick={() => setOpen(false)}
                  className="w-full"
                  type="button"
                  variant={"secondary"}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
