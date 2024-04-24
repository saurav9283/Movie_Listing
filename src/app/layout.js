import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header.js";
import Providers from "./Providers";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie App",
  description: "This is Movie database Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
