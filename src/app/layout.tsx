import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from "next/font/google";
import { SideNavBar } from "./components/SideNavBar";
import { ThemeProvider } from "./theme/ThemeProvider";
import ThemeSwitcherOneClick from "./theme/ThemeSwitcherOneClick";

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
    <html lang="en" className="dark">
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SidebarProvider>
            <SideNavBar />
            <main className="w-full">
              <SidebarTrigger />
              <Analytics />
              <ThemeSwitcherOneClick seeName={false} />

              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
