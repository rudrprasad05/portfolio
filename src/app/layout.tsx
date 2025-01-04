"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/hooks/useSessionContext";
import ThemeSwitcherOneClick from "./theme/ThemeSwitcherOneClick";
import "./globals.css";
import "./font.css";
import LayoutContainer from "@/components/global/LayoutContainer";
import { SideNavBar } from "@/components/global/SideNavBar";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-scroll">
      <head>
        <title>Rudr Prasad</title>
      </head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <body className={`flex items-center`}>
          <Suspense
            fallback={
              <LayoutContainer>
                <div className="flex flex-col gap-2 grow my-auto justify-center items-center">
                  <Loader2 className=" animate-spin w-16 h-16 stroke-1" />
                  <h1>Loading</h1>
                </div>
              </LayoutContainer>
            }
          >
            <SessionProvider>
              <SidebarProvider className="">
                <SideNavBar />
                <Toaster />
                <LayoutContainer>
                  <SidebarTrigger />
                  {/* <Analytics /> */}
                  <ThemeSwitcherOneClick seeName={false} />
                  {children}
                </LayoutContainer>
              </SidebarProvider>
            </SessionProvider>
          </Suspense>
        </body>
      </ThemeProvider>
    </html>
  );
}
