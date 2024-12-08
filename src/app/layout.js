import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "DOME PDU - Drilling Online Monitoring Environment",
  description:
    "Platform pemantauan pengeboran secara online yang menyediakan data real-time dan analisis untuk meningkatkan efisiensi dan keamanan operasional pengeboran.",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${montserrat.variable}`} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
