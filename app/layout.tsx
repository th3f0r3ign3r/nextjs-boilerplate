import {
  APP_AUTHOR as APP_AUTHORS,
  APP_DESCRIPTION,
  APP_KEYWORDS,
  APP_NAME,
} from "@/constants";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Inter, Lexend } from "next/font/google";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  authors: APP_AUTHORS,
  keywords: APP_KEYWORDS,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth antialiased",
        inter.className,
        lexend.className
      )}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
