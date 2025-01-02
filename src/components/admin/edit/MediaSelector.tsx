"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCallback, useEffect, useState } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";

import { NewCategory } from "@/actions/category";
import { GetAllMedia, SaveMedia } from "@/actions/media";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Media } from "@/types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
export default function MediaSelector() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"LOADING" | "IDLE">("LOADING");
  const [selectedMedia, setSelectedMedia] = useState(undefined);
  const [media, setMedia] = useState<Media[]>([]);
  const [file, setFile] = useState<File>();
  const [imageIsUploadingToCloud, setImageIsUploadingToCloud] = useState(false);
  const [cloudImageUrl, setCloudImageUrl] = useState<string | undefined>(
    undefined
  );
  const router = useRouter();

  const onSubmit = async () => {};

  useEffect(() => {
    const fetch = async () => {
      const res = await GetAllMedia();
      setMedia(res);
      console.log(res);
      setState("IDLE");
    };
    fetch();
  }, [open]);

  const handleImageUpload = async (file: File) => {
    const salt = Date.now();
    console.log(file);
    setImageIsUploadingToCloud(true);
    if (!file) return;

    try {
      const data = new FormData();
      data.append("file", file, "image" + salt.toString());

      const res = await fetch("/api/s3-upload", {
        method: "POST",
        body: data,
      })
        .then(() => {
          setImageIsUploadingToCloud(false);
          setCloudImageUrl(
            `https://mctechfiji.s3.amazonaws.com/devlog/${
              "image" + salt.toString()
            }`
          );
          console.log(
            `https://mctechfiji.s3.amazonaws.com/devlog/${
              "image" + salt.toString()
            }`
          );

          toast.success("Image Uploaded to Cloud");
        })
        .catch((e) => {
          toast("Something went wrong", { description: "Contact site admin" });
        });
      // handle the error
    } catch (e) {
      // Handle errors here
      console.error(e);
    }
  };

  const saveNewMedia = async () => {
    if (!cloudImageUrl) return;
    const media = await SaveMedia(cloudImageUrl);
    console.log(media);
  };

  const HandleDropZone = () => {
    const onDrop = useCallback<NonNullable<DropzoneOptions["onDrop"]>>(
      (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFile(file);
        handleImageUpload(file);
      },
      [setFile]
    );

    // Set up dropzone with the 'onDrop' callback and accept only image files
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false,
    });
    if (file) {
      return <>{file.name}</>;
    }
    if (!isDragActive) {
      <div
        {...getRootProps()}
        className="grid place-items-center text-muted w-full rounded border-dashed border h-full"
      >
        <input {...getInputProps()} />
        <div className="">Drag and drop an image here</div>
      </div>;
    }
    return (
      <div
        {...getRootProps()}
        className="grid place-items-center text-secondary-foreground w-full rounded border-dashed border h-full"
      >
        <input {...getInputProps()} />
        <div className="">Drop the image</div>
      </div>
    );
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
                  {media &&
                    media.map((m, index) => <div key={index}>{m.id}</div>)}
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
            <TabsContent value="Create" className="h-full">
              {!file && (
                <div className="h-full flex flex-col pt-6 gap-4">
                  <div className="flex-1">
                    <HandleDropZone />
                  </div>

                  <div>
                    <Button disabled={!selectedMedia}>Save changes</Button>
                  </div>
                </div>
              )}
              {file && (
                <div className="w-full h-full grid grid-cols-2 p-6 gap-4">
                  <div className="w-full h-full overflow-clip">
                    {imageIsUploadingToCloud && (
                      <Skeleton className="w-full h-full" />
                    )}
                    {!imageIsUploadingToCloud && (
                      <img
                        className="w-full h-full object-cover"
                        src={cloudImageUrl}
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Input
                      disabled
                      placeholder="size"
                      value={(file.size / Math.pow(2, 20)).toFixed(2) + "MB"}
                    />
                    <Input disabled placeholder="src" value={cloudImageUrl} />
                  </div>
                  <div>
                    <Button
                      onClick={() => saveNewMedia()}
                      disabled={!imageIsUploadingToCloud}
                    >
                      Save changes
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
