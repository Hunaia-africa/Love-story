import type { Metadata, Viewport } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeRegistry from "@/theme/ThemeRegistry";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Cursor from "@/components/motion/Cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faizah & Dave | The Traditional Wedding",
  description:
    "You are invited to celebrate the traditional wedding of Faizah & Dave — 14th August 2026, Kakamega Town.",
};

export const viewport: Viewport = {
  themeColor: "#F6F1E7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeRegistry>
            <SmoothScroll />
            {children}
            <Cursor />
          </ThemeRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
