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
import { UpdatePost } from "@/actions/posts";
import { FullPost } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import MediaSelector from "./MediaSelector";

const settingsSchema = z.object({
  title: z.string().optional(),
  // featuredImageId: z.string().optional(),
  // postCategories: z.any().optional(),
});

export type SettingValues = z.infer<typeof settingsSchema>;

export default function Settings() {
  const router = useRouter();
  const { post, allCategories } = usePost();
  const { session } = useSession();
  const [state, setState] = useState<"LOADING" | "IDLE">("IDLE");
  const [image, setImage] = useState<File>();

  const form = useForm<SettingValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      title: post?.title || "",
    },
  });
  const onSubmit = async (data: SettingValues) => {
    console.log("l");
    try {
      const res = await UpdatePost(post?.id || 0, data).then((r) => {
        setState("IDLE");
        router.refresh();
        toast.success("New Tag created");
      });
    } catch (error) {
      setState("IDLE");
    }
  };

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
    } catch (e) {
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
        </SheetHeader>
        <SheetDescription className="h-full flex-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" h-full flex flex-col justify-between"
            >
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="title"
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

                <div className="flex justify-between items-center">
                  <Label>Select Media</Label>
                  <MediaSelector />
                </div>
              </div>

              <Button className="w-full mt-auto">Save</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
