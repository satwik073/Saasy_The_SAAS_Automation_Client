'use client'
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ComplexionsProvider";
import { TRANSLATING_NAVIGATION_TEXT } from "../Globals/GlobalSiteNavigation/NavigationWrapping/Constant";
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
            defaultTheme={TRANSLATING_NAVIGATION_TEXT.drop_down_dark_connecting_content}
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}
