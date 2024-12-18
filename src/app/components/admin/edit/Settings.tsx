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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cog, Loader2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { usePost } from "@/hooks/usePostContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "@/hooks/useSessionContext";
import { Input } from "@/components/ui/input";
import ImageDropzone from "./ImageDropzone";

const settingsSchema = z.object({
  name: z.string().optional(),
  featuredImageId: z.string().optional(),
  postCategories: z.any().optional(),
});

type SettingValues = z.infer<typeof settingsSchema>;

export default function Settings() {
  const { post, allCategories } = usePost();
  const { session } = useSession();
  const [state, setState] = useState<"LOADING" | "IDLE">("IDLE");
  const [image, setImage] = useState<File>();

  const form = useForm<SettingValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      name: post?.title || "",
    },
  });
  const onSubmit = async () => {};

  const handleImageUpload = async () => {
    // setloadingImage(true);
    console.log("fired", image?.name);
    if (!image) return;

    try {
      const data = new FormData();
      data.set("image", image);

      const res = await fetch("/api/s3-upload", {
        method: "POST",
        body: data,
      })
        .then((e) => {
          console.log(async () => await e.json());
          // setloadingImage(false);
          // setFormReadyToUpload(true);
          // toast.success("Image Uploaded to Cloud");
        })
        .catch((e) => {
          console.log(e);
        });
      // handle the error
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
  };

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

                        <Select
                          onValueChange={(value) => {
                            const selectedId = allCategories.find(
                              (i) => i.name === value
                            )?.id;
                            field.onChange(selectedId);
                          }}
                          defaultValue={post?.postCategories[0].category.name}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a tag" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {allCategories?.map((i) => (
                              <SelectItem key={i.id} value={i.name}>
                                {i.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <ImageDropzone setImage={setImage} />
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
