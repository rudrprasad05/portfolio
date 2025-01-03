"use client";

import {
  CheckCheck,
  Clipboard,
  Mail,
  MapPin,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import { toast } from "sonner";
import FullWidthContainer from "../global/FullWidthContainer";

export default function Header() {
  return (
    <FullWidthContainer>
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl">Hi, Im Rudr</h1>
        <h1 className="text-4xl">
          A <span className="text-muted-foreground">Software</span> Developer
        </h1>
      </div>
      {false && <Links />}
    </FullWidthContainer>
  );
}

const Links = () => {
  const [text, setText] = useState("rudrprasad@yahoo.com");
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Email Copied into clipboard");
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <div className="mt-6 text-muted-foreground">
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        <div>Fiji 🇫🇯</div>
      </div>
      <div className="flex items-center gap-2">
        <FaGithub className="w-4 h-4" />
        <div>rudrprasad05</div>
        <div>
          <Link target="_blank" href={"https://github.com/rudrprasad05"}>
            <SquareArrowOutUpRight className="cursor-pointer w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        <div>Send me an email</div>
        <div>
          {!copied && <Clipboard onClick={handleCopy} className="w-4 h-4" />}
          {copied && (
            <div className="flex gap-2 items-center text-xs">
              <CheckCheck className="cursor-pointer w-4 h-4" />
              Email has been copied
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
