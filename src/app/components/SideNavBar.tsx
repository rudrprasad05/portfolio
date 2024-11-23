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
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import {
  Calendar,
  ChevronDown,
  Home,
  Mail,
  Search,
  Settings,
} from "lucide-react";
import Image from "next/image";

const groups = [
  {
    groupName: "Explore",
    items: [
      {
        title: "Experience",
        icon: Home,
        slug: "#",
      },
      {
        title: "Projects",
        icon: Home,
        slug: "#",
      },
      {
        title: "Resume",
        icon: Home,
        slug: "#",
      },
      {
        title: "About",
        icon: Home,
        slug: "#",
      },
    ],
  },
  {
    groupName: "Socials",
    items: [
      {
        title: "Instagram",
        icon: Home,
        slug: "#",
      },
      {
        title: "Linkdin",
        icon: Home,
        slug: "#",
      },
      {
        title: "Github",
        icon: Home,
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
          <SidebarGroup>
            <SidebarGroupLabel>{g.groupName}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map((project) => (
                  <SidebarMenuItem key={project.title}>
                    <SidebarMenuButton asChild>
                      <a href={project.slug}>
                        <project.icon />
                        <span>{project.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
