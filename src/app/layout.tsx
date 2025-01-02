import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/hooks/useSessionContext";
import ThemeSwitcherOneClick from "./theme/ThemeSwitcherOneClick";
import "./globals.css";
import "./font.css";
import LayoutContainer from "@/components/global/LayoutContainer";
import { SideNavBar } from "@/components/global/SideNavBar";
import { ThemeProvider } from "next-themes";

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
        </body>
      </ThemeProvider>
    </html>
  );
}
