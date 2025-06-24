import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/contexts/AuthContext";
import ClientLayout from '@/components/ClientLayout';
import React from 'react';

export const metadata: Metadata = {
  title: "Carbon Credit Project",
  description: "A platform for carbon credit management",
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  }
};

const bodyStyle = {
  backgroundColor: "#f0fdf4", // equivalent to green-50
  color: "#111827", // equivalent to gray-900
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" />
      </head>
      <body style={bodyStyle}>
        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
