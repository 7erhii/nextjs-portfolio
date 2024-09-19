import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Serhii Krepets | Professional Web Developer | React & PHP Specialist",
  description:
    "Explore Serhii Krepets' portfolio—expert web developer specializing in React & PHP. Discover modern web applications, front-end development, and exceptional UI/UX design services.",
  keywords:
    "Serhii Krepets, web developer, React, PHP, front-end development, web development portfolio, JavaScript developer, responsive design, web applications, UI/UX design, modern web technologies",

  openGraph: {
    title:
      "Serhii Krepets | Professional Web Developer | React & PHP Specialist",
    description:
      "Explore Serhii Krepets' portfolio—expert web developer specializing in React & PHP. Discover modern web applications, front-end development, and exceptional UI/UX design services.",
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
    site_name: "Serhii Krepets Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Serhii Krepets | Professional Web Developer | React & PHP Specialist",
    description:
      "Explore Serhii Krepets' portfolio—expert web developer specializing in React & PHP. Discover modern web applications, front-end development, and exceptional UI/UX design services.",
    images: ["/thumbnail.avif"],
    site: "@7erhiy",
    creator: "@7erhiy",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
  },

  structuredData: {
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />

        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.structuredData),
          }}
        />
      </head>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
