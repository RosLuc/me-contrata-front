import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { FilterContextProvider } from "@/context/filter-context";

const saira = Saira({
	weight: ["300", "400", "500", "600"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Me Contrata",
	description: "Oferte seus serviços.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={saira.className}>
				<FilterContextProvider>
					<Header />
					{children}
				</FilterContextProvider>
			</body>
		</html>
	);
}
