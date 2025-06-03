import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Layer Caker",
  description: "Discover the art of layered cakes at Layer Caker. We craft exquisite, multi-layered cakes with unique flavors and stunning designs. From classic layer cakes to modern creations, find inspiration, recipes, and custom cake orders for your special occasions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
