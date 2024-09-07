import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

//Components
import Navbar from '@/app/components/navbar'

export const metadata = {
  title: "The Yeastern Civilization - Shillong's First Microbrewery & Restaurant",
  description: "Discover The Yeastern Civilization, Shillong's first microbrewery offering fresh, locally brewed craft beer. Experience the unique blend of local flavors and cultural heritage in a cozy setting, perfect for locals and tourists alike.",
  canonical: '/',
  languages: {
    'en-US': '/en-US',
  },
  openGraph: {
    type: 'website',
    url: 'https://tycindia.com',  // replace with your domain
    title: "The Yeastern Civilization - Shillong's First Microbrewery & Restaurant",
    description: "Discover The Yeastern Civilization, Shillong's first microbrewery offering fresh, locally brewed craft beer.",
    images: [
      {
        url: 'https://tycindia.com/opengraph-image.jpg',  // full URL of the OG image
        width: 1200,
        height: 630,
        alt: 'The Yeastern Civilization Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',  // Specifies the type of card (summary or summary_large_image)
    title: "The Yeastern Civilization - Shillong's First Microbrewery & Restaurant",
    description: "Discover The Yeastern Civilization, Shillong's first microbrewery offering fresh, locally brewed craft beer.",
    images: [
      {
        url: 'https://tycindia.com/opengraph-image.jpg',  // Same OG image for Twitter
        alt: 'The Yeastern Civilization Banner',
      },
    ],
  },
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













