// app/layout.tsx (only the body snippet shown)
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/site/NavBar";


export const metadata: Metadata = {
title: "Pollr",
description: "Polling app scaffold",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<NavBar />
<main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
</body>
</html>
);
}
