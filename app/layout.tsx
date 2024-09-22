import type { Metadata } from "next";
import "./globals.css";
import Theme from "./component/theme";

export const metadata: Metadata = {
  title: "Donald Portfolio",
  description: "Donald Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Theme/>
        {children}
      </body>
    </html>
  );
}
