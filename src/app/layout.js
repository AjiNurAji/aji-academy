import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Aji Academy",
  description: "Digital Harmony - FKOM Festival 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/favicon.svg'/>
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
