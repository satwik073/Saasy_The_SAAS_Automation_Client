import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/multiple-themes-provider";
import { title } from "process";
const DM_Sans_desructured = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <title>SaaSy - Saas Automation Platform</title>
       <link rel="icon" href="/fuzzieLogo.png" />
      <body className={DM_Sans_desructured.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}
