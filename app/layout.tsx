// These styles apply to every route in the application
import "@/styles/globals.css";
import "material-symbols";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { SessionProvider } from "next-auth/react"
import { Suspense } from "react";
import Head from 'next/head';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "MyEmsInfo";
const description =
  "Securely share your emergency information.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://myems.info"),
  themeColor: "#FFF",
};



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
 
      <body className={inter.variable}>
        <div className='prose'>
        <Toaster />
        <Suspense fallback="Loading...">
          {/* @ts-expect-error Async Server Component */}
          
          <AuthStatus />
        </Suspense>
        <div className='absolute top-10 w-full'>
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
