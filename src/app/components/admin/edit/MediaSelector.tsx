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
import { GetAllMedia } from "@/actions/media";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Media } from "@/types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
    setImageIsUploadingToCloud(true);
    if (!file) return;

    try {
      let data = new FormData();
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
          setImageIsUploadingToCloud(true);
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
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
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
            <TabsContent value="Create" className="h-full">
              <div className="h-full flex flex-col pt-6 gap-4">
                <div className="flex-1">
                  <HandleDropZone />
                </div>

                <div>
                  <Button disabled={!selectedMedia}>Save changes</Button>
                </div>
              </div>

              {/* <Card>
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
              </Card>*/}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
