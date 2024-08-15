'use client'
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/multiple-themes-provider";
import { translating_navigattion_text } from "./Globals/GlobalSiteNavigation/NavigationWrapping/Constant";
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
            defaultTheme={translating_navigattion_text.drop_down_dark_content}
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}
