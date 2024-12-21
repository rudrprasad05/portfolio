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

export default function MediaSelector() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"LOADING" | "IDLE">("IDLE");
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Media</DialogTitle>
          <DialogDescription>Select or create new media</DialogDescription>
        </DialogHeader>
        <div>
          <Tabs defaultValue="Select" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Select">Select</TabsTrigger>
              <TabsTrigger value="Create">Create</TabsTrigger>
            </TabsList>
            <TabsContent value="Select">
              <Card>
                <CardHeader>
                  <CardTitle>Select</CardTitle>
                  <CardDescription>Use an existing media file</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
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
