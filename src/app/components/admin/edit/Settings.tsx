"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Cog } from "lucide-react";
import { z } from "zod";

const settingsSchema = z.object({
  name: z.string().optional(),
});

type SettingValues = z.infer<typeof settingsSchema>;

export default function Settings() {
  return (
    <Sheet>
      <SheetTrigger>
        <Cog />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Post Settings</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
