import { Collapsible } from "@/components/ui/collapsible";
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
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  Book,
  Briefcase,
  Calendar,
  ChevronDown,
  Code,
  FileText,
  Folder,
  Home,
  Info,
  Layers,
  LucideIcon,
  Mail,
  Search,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import ThemeSwitcherOneClick from "../theme/ThemeSwitcherOneClick";
import Link from "next/link";

const groups = [
  {
    groupName: "Explore",
    items: [
      {
        title: "Experience",
        icon: <Briefcase />,
        slug: "#",
      },
      {
        title: "Projects",
        icon: <Folder />,
        slug: "#",
      },
      {
        title: "Resume",
        icon: <FileText />,
        slug: "#",
      },
      {
        title: "About",
        icon: <Info />,
        slug: "#",
      },
    ],
  },
  {
    groupName: "Resources",
    items: [
      {
        title: "Devlog",
        icon: <Code />,
        slug: "#",
      },
      {
        title: "Reads",
        icon: <Book />,
        slug: "#",
      },
      {
        title: "Tech Stack",
        icon: <Layers />,
        slug: "#",
      },
    ],
  },
  {
    groupName: "Socials",
    items: [
      {
        title: "Instagram",
        icon: <FaInstagram />,
        slug: "#",
      },
      {
        title: "Linkdin",
        icon: <FaLinkedin />,
        slug: "#",
      },
      {
        title: "Github",
        icon: <FaGithub />,
        slug: "#",
      },
    ],
  },
];

export function SideNavBar() {
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
            <SidebarGroupLabel className="">{g.groupName}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map((project) => (
                  <SidebarMenuItem key={project.title}>
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
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
