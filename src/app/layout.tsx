import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/app/ui/Navbar";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio of Darcheville Thomas",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body>
        <div className="flex h-screen flex-col">
            <Navbar />
            <div className='bg-dark flex-1'>{children}</div>
        </div>
        </body>
        </html>
    );
}
