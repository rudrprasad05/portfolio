"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Book,
  Briefcase,
  Code,
  Compass,
  FileText,
  Folder,
  Info,
  Layers,
} from "lucide-react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useSession } from "@/hooks/useSession";
import { Button } from "@/components/ui/button";

const groups = [
  {
    groupName: null,
    items: [
      {
        title: "Explore",
        icon: <Compass />,
        slug: "/",
      },
      {
        title: "Experience",
        icon: <Briefcase />,
        slug: "/experience",
      },
      {
        title: "Projects",
        icon: <Folder />,
        slug: "/projects",
      },
      {
        title: "Resume",
        icon: <FileText />,
        slug: "/resume",
      },
      {
        title: "About",
        icon: <Info />,
        slug: "/about",
      },
    ],
  },
  {
    groupName: "Resources",
    items: [
      {
        title: "Devlog",
        icon: <Code />,
        slug: "/devlog",
      },
      {
        title: "Reads",
        icon: <Book />,
        slug: "/reads",
      },
      {
        title: "Tech Stack",
        icon: <Layers />,
        slug: "/techstack",
      },
    ],
  },
  {
    groupName: "Socials",
    items: [
      {
        title: "Instagram",
        icon: <FaInstagram />,
        slug: "https://www.instagram.com/not_rudr",
      },
      {
        title: "Linkdin",
        icon: <FaLinkedin />,
        slug: "https://www.linkedin.com/in/rudr-prasad",
      },
      {
        title: "Github",
        icon: <FaGithub />,
        slug: "https://github.com/rudrprasad05",
      },
    ],
  },
];

export function SideNavBar() {
  const pathname = usePathname();
  const { session, logout } = useSession();
  console.log(pathname);
  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10">
            <Image
              src={"/images/rudr-img.jpg"}
              height={50}
              width={50}
              alt="rudr image"
              className="w-full object-cover h-full aspect-square rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="bold font-extrabold">Rudr Prasad</h3>
            <h5>Software Developer</h5>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        {groups.map((g) => (
          <SidebarGroup key={g.groupName}>
            {g.groupName && (
              <SidebarGroupLabel className="">{g.groupName}</SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map((project) => (
                  <SidebarMenuItem
                    className={clsx(
                      `rounded-md`,
                      pathname == project.slug ? "bg-muted" : "bg-none"
                    )}
                    key={project.title}
                  >
                    <SidebarMenuButton asChild>
                      <Link className="text-lg" href={project.slug}>
                        {project.icon}
                        <span>{project.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        {session && <Button onClick={logout}>Logout</Button>}
      </SidebarFooter>
    </Sidebar>
  );
}
