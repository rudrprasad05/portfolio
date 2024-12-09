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
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function NewPostModal() {
  const [open, setOpen] = useState(false);

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
          <DialogTitle>New Website</DialogTitle>
          <DialogDescription>Create New Website</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
