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
        <title>Serhii Krepets | Expert Web Developer | Full Stack Developer in React & Node.js</title>
        <meta
          name="description"
          content="Hire Serhii Krepets - Senior Web Developer with 5+ years of experience. Specializing in React, Node.js, and PHP development. Creating high-performance web applications and responsive designs. Based in Europe, available worldwide."
        />
        <meta
          name="keywords"
          content="web developer, hire web developer, React developer, Serhii Krepets, Krepets, full stack developer, JavaScript expert, Node.js developer, remote developer, European developer, PHP developer, frontend developer, web developer Toronto, web developer Vancouver, web developer New York, web developer San Francisco, web developer Kiev, web developer Lviv, разработчик Украина, веб розробник Київ"
        />

        {/* Open Graph (OG) Metadata */}
        <meta property="og:title" content="Hire Serhii Krepets | Expert Web Developer & Full Stack Engineer" />
        <meta
          property="og:description"
          content="Senior Web Developer specializing in React, Node.js & PHP. 5+ years of experience in building scalable web applications. Available for hire globally."
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
              jobTitle: "Senior Web Developer",
              url: "https://krepets.com/",
              sameAs: [
                "https://www.linkedin.com/in/serhiikrepets",
                "https://twitter.com/7erhiy",
                "https://github.com/7erhii",
                "https://www.instagram.com/7erhi/"
              ],
              description: "Senior Web Developer with expertise in React, Node.js, and PHP. Available for remote work worldwide, including USA (New York, San Francisco, Los Angeles), Canada (Toronto, Vancouver, Montreal), and Ukraine (Kyiv, Lviv, Kharkiv). Specializing in building high-performance web applications and responsive designs.",
              image: "https://krepets.com/thumbnail.avif",
              alumniOf: {
                "@type": "Organization",
                name: "Your University or Notable Training"
              },
              knowsAbout: ["Web Development", "React", "Node.js", "PHP", "JavaScript", "Full Stack Development", "UI/UX Design"],
              worksFor: {
                "@type": "Organization",
                name: "Freelance Web Developer"
              },
              workLocation: {
                "@type": "Place",
                availableIn: [
                  {
                    "@type": "City",
                    name: "Toronto",
                    containedInPlace: {
                      "@type": "Country",
                      name: "Canada"
                    }
                  },
                  {
                    "@type": "City",
                    name: "Vancouver",
                    containedInPlace: {
                      "@type": "Country",
                      name: "Canada"
                    }
                  },
                  {
                    "@type": "City",
                    name: "Montreal",
                    containedInPlace: {
                      "@type": "Country",
                      name: "Canada"
                    }
                  },
                  {
                    "@type": "City",
                    name: "New York",
                    containedInPlace: {
                      "@type": "Country",
                      name: "USA"
                    }
                  },
                  {
                    "@type": "City",
                    name: "San Francisco",
                    containedInPlace: {
                      "@type": "Country",
                      name: "USA"
                    }
                  },
                  {
                    "@type": "City",
                    name: "Los Angeles",
                    containedInPlace: {
                      "@type": "Country",
                      name: "USA"
                    }
                  },
                  {
                    "@type": "City",
                    name: "Kyiv",
                    containedInPlace: {
                      "@type": "Country",
                      name: "Ukraine"
                    }
                  },
                  {
                    "@type": "City",
                    name: "Lviv",
                    containedInPlace: {
                      "@type": "Country",
                      name: "Ukraine"
                    }
                  },
                  {
                    "@type": "City",
                    name: "Odessa",
                    containedInPlace: {
                      "@type": "Country",
                      name: "Ukraine"
                    }
                  },
                ]
              }
            }),
          }}
        />

        {/* Дополнительные мета-теги */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Serhii Krepets" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://krepets.com/" />

        {/* Дополнительные мета-теги для геолокации */}
        <meta name="geo.region" content="US, CA, UA" />
        <meta name="geo.placename" content="New York, Toronto, Kyiv" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />
      </head>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
