import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3G Wine | Reserva Exclusiva - Vinhos Premium",
  description: "Descubra a nossa seleção exclusiva de vinhos premium. Qualidade, tradição e excelência em cada garrafa.",
  keywords: "vinhos, vinho premium, loja de vinhos, vinho português, reserva exclusiva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
