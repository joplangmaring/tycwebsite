import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

//Components
import Navbar from '@/app/components/navbar'

export const metadata = {
  title: "The Yeastern Civilization - Shillong's First Microbrewery & Restaurant",
  description: "Discover The Yeastern Civilization, Shillong's first microbrewery offering fresh, locally brewed craft beer. Experience the unique blend of local flavors and cultural heritage in a cozy setting, perfect for locals and tourists alike.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}













