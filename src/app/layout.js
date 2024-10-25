import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Serhii Krepets | Professional Web Developer | React & PHP Specialist</title>
        <meta
          name="description"
          content="Explore Serhii Krepets' portfolio—expert web developer specializing in React & PHP. Discover modern web applications, front-end development, and exceptional UI/UX design services."
        />
        <meta
          name="keywords"
          content="Serhii Krepets, web developer, React, PHP, front-end development, web development portfolio, JavaScript developer, responsive design, web applications, UI/UX design, modern web technologies"
        />

        {/* Open Graph (OG) Metadata */}
        <meta property="og:title" content="Serhii Krepets | Professional Web Developer" />
        <meta
          property="og:description"
          content="Explore Serhii Krepets' portfolio—expert web developer specializing in React & PHP."
        />
        <meta property="og:url" content="https://krepets.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.avif" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Serhii Krepets | Professional Web Developer" />
        <meta
          name="twitter:description"
          content="Explore Serhii Krepets' portfolio—expert web developer specializing in React & PHP."
        />
        <meta name="twitter:image" content="/thumbnail.avif" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Serhii Krepets",
              jobTitle: "Web Developer",
              url: "https://krepets.com/",
              sameAs: [
                "https://www.linkedin.com/in/serhiikrepets",
                "https://twitter.com/7erhiy",
                "https://github.com/yourgithubhandle",
              ],
              description:
                "Experienced web developer specializing in building modern web applications using React and PHP.",
              image: "https://krepets.com/thumbnail.avif",
            }),
          }}
        />
      </head>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
