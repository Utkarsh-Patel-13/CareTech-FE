import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/core/theme-provider/theme-provider";
import { UserProvider } from "@/contexts/user-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CareTech",
    description: "Reimagining healthcare with technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <UserProvider>
                    <ThemeProvider>{children}</ThemeProvider>
                </UserProvider>
            </body>
        </html>
    );
}
