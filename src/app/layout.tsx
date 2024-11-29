import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Roboto } from "next/font/google";

import LayoutContainer from "./components/LayoutContainer";
import { SideNavBar } from "./components/SideNavBar";
import { ThemeProvider } from "./theme/ThemeProvider";
import ThemeSwitcherOneClick from "./theme/ThemeSwitcherOneClick";

import "./globals.css";

const roboto = Roboto({
  weight: ["400", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

// const roboto_mono = Roboto_Mono({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-roboto-mono",
//   display: "swap",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-scroll">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <body className={`${roboto.className} flex items-center`}>
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
        </body>
      </ThemeProvider>
    </html>
  );
}
