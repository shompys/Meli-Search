import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Meli",
	description: "App para buscar productos en Mercado Libre",
	icons: {
		icon: "/favicon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es-AR">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
