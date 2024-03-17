import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { AuthProvider } from "@/providers/auth-provider";
import { SpinProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SpinProvider>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>
            <nav>
              <Header />
            </nav>
            {children}
          </body>
        </html>
      </AuthProvider >
    </SpinProvider>
  );
}
