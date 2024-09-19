import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Serhii Krepets - Web Developer",
  description: "Explore Serhii Krepets' portfolio showcasing modern web projects using Next.js and React.",
  keywords: "Serhii Krepets, Web Developer, Next.js, React, Front-End Development, Portfolio, JavaScript Developer, Responsive Design, Web Applications, UI/UX Design, Modern Web Technologies",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/public/tumbnail.avif" />
        <meta property="og:url" content="https://krepets.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/public/tumbnail.avif" />
      </head>
      <body className={lato.className} >{children}</body>
    </html>
  );
}
