import type {Metadata} from "next";
import "./globals.css";
import SideNav from "@/app/ui/sidenav";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio of Darcheville Thomas",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`antialiased`}
        >
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <div className="grow bg-custom-bg">{children}</div>
        </div>
        </body>
        </html>
    );
}
