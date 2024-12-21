"use client";

import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import { Loader2, Plus, Router } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { NewCategory } from "@/actions/category";
import { useRouter } from "next/navigation";
import { Media } from "@/types";
import { GetAllMedia } from "@/actions/media";

export default function MediaSelector() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"LOADING" | "IDLE">("LOADING");
  const [selectedMedia, setSelectedMedia] = useState(undefined);
  const [media, setMedia] = useState<Media[]>([]);
  const router = useRouter();

  const onSubmit = async () => {
    setState("LOADING");
    try {
      const res = await NewCategory("data.name").then((r) => {
        setState("IDLE");
        setOpen(false);
        router.refresh();
        toast.success("New Tag created");
      });
    } catch (error) {
      setState("IDLE");
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await GetAllMedia();
      setMedia(res);
      console.log(res);
      setState("IDLE");
    };
    fetch();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className={`flex items-center justify-between gap-3   cursor-pointer ${buttonVariants(
            {
              variant: "secondary",
            }
          )}`}
        >
          <Plus />
          <p>New</p>
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-[720px] h-[520px] flex flex-col">
        <div>
          <DialogTitle>Media</DialogTitle>
          <DialogDescription>Select or create new media</DialogDescription>
        </div>

        <div className="flex-1 pb-10">
          <Tabs defaultValue="Select" className="w-full h-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Select">Select</TabsTrigger>
              <TabsTrigger value="Create">Create</TabsTrigger>
            </TabsList>
            <TabsContent value="Select" className="h-full">
              <div className="h-full flex flex-col pt-6 gap-4">
                <div className="flex-1">
                  {media && media.map((m) => <div>{m.id}</div>)}
                  {media?.length == 0 && (
                    <div className="grid place-items-center text-muted w-full rounded border-dashed border h-full">
                      <div className="">No Media</div>
                    </div>
                  )}
                </div>

                <div>
                  <Button disabled={!selectedMedia}>Save changes</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Create">
              <Card>
                <CardHeader>
                  <CardTitle>Create</CardTitle>
                  <CardDescription>Create a new media File</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current Create</Label>
                    <Input id="current" type="Create" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New Create</Label>
                    <Input id="new" type="Create" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Create</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
