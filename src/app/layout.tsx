import Navbar from "@/app/ui/layout/navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Darcheville Thomas",
    description: "Portfolio of Darcheville Thomas",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="fr">
        <body className="font-sans">
        <div className="flex h-screen flex-col">
            <Navbar />
            <div className='bg-dark flex-1'>{children}</div>
        </div>
        </body>
        </html>
    );
}
