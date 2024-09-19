import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Serhii Krepets | Professional Web Developer | Next.js & React Specialist",
  description: "Welcome to Serhii Krepets' portfolio — an experienced web developer specializing in building modern web applications using Next.js and React. Discover our projects and services in front-end development and UI/UX design.",
  keywords: "Serhii Krepets, web developer, Next.js, React, front-end development, web development portfolio, JavaScript developer, responsive design, web applications, UI/UX design, modern web technologies",
  
  openGraph: {
    title: "Serhii Krepets | Professional Web Developer | Next.js & React Specialist",
    description: "Welcome to Serhii Krepets' portfolio — an experienced web developer specializing in building modern web applications using Next.js and React. Discover our projects and services in front-end development and UI/UX design.",
    url: "https://krepets.com/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/thumbnail.avif", 
        width: 1200,
        height: 630,
        alt: "Serhii Krepets Portfolio",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Serhii Krepets | Professional Web Developer | Next.js & React Specialist",
    description: "Welcome to Serhii Krepets' portfolio — an experienced web developer specializing in building modern web applications using Next.js and React. Discover our projects and services in front-end development and UI/UX design.",
    images: ["/thumbnail.avif"],
    site: "@7erhiy", 
  },
  
  icons: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
