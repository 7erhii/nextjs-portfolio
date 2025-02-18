"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Examples.module.css";

import Title from "@/components/Title/Title";
import { FaCircleArrowRight } from "react-icons/fa6";

import Image1 from "@/assets/images/Frame 12.png";
import proj1 from "@/assets/images/proj1.png";
import proj2 from "@/assets/images/proj2.png";
import proj3 from "@/assets/images/proj3.png";
import proj4 from "@/assets/images/proj4.png";
import proj5 from "@/assets/images/proj5.png";
import proj6 from "@/assets/images/proj6.png";
import proj7 from "@/assets/images/proj7.png";
import proj8 from "@/assets/images/proj8.png";
import proj9 from "@/assets/images/proj9.png";
import proj10 from "@/assets/images/proj10.png";
import proj11 from "@/assets/images/proj11.png";
import proj12 from "@/assets/images/proj12.png";
import proj13 from "@/assets/images/proj13.png";
import proj14 from "@/assets/images/proj14.png";
import proj15 from "@/assets/images/proj15.png";
import proj16 from "@/assets/images/proj16.png";


const projects = [
  {
    title: "TrustGame",
    description:
      "Crypto token game in solana blockchain",
    technologies: "Next.js, Supabase, SolanaApi, Redis ",
    imageUrl: proj16,
    link: "https://trustgame.io/",
  },
  {
    title: "Vekmed Clinic",
    description:
      "A multilingual medical services website offering specialized healthcare information and online consultations.",
    technologies: "Next.js, i18n, NodeJs, SMS-API,",
    imageUrl: proj15,
    link: "https://www.vekmed.com/en",
  },
  {
    title: "Art Digital Studio",
    description:
      "A sleek web studio page featuring advanced animations with GSAP and multilingual support with i18n.",
    technologies: "Next.js, GSAP, i18n",
    imageUrl: proj1,
    link: "https://art-digital.vercel.app/en",
  },
  {
    title: "Landing Page for an Auto Repair Shop",
    description:
      "A sleek WordPress landing page for an auto repair shop, featuring a Google API integration, language switcher, and responsive design. Connect effortlessly with clients through our advanced mailing system.",
    technologies: "NodeJS, Axios",
    imageUrl: proj14,
    link: "https://www.carforyou.co.il/",
  },
  {
    title: "RedMax Online Cinema",
    description:
      "An online cinema platform designed with Vue, integrated with WordPress and PHP for content management.",
    technologies: "Vue, WordPress, ACF, PHP",
    imageUrl: proj2,
    link: "https://www.redmax-tv.tv/",
  },
  {
    title: "Numerologist Landing",
    description:
      "A captivating landing page for a numerologist, featuring interactive elements designed with WordPress and JavaScript.",
    technologies: "WordPress, ACF, JS",
    imageUrl: proj3,
    link: "https://yourmatrixenergy.de/",
  },
  {
    title: "Aklima Pro",
    description:
      "A comprehensive website for climate equipment sales, developed using Drupal with PHP and JavaScript.",
    technologies: "Drupal, PHP, JS",
    imageUrl: proj4,
    link: "https://projekt.aklimapro.pl/",
  },
  {
    title: "RedMax TV Online Cinema",
    description:
      "A service-oriented online cinema site, utilizing WordPress, Elementor, JavaScript, and PHP for a dynamic user experience.",
    technologies: "WordPress, Elementor, JS, PHP",
    imageUrl: proj5,
    link: "https://www.redmax.tv/",
  },
  {
    title: "Kiga Plus",
    description:
      "An educational service platform offering online courses for children, built with Angular for a robust user interface.",
    technologies: "Angular",
    imageUrl: proj6,
    link: "https://angular-kiga.vercel.app/",
  },
  {
    title: "OpenWeather App",
    description:
      "A demonstration of handling API requests with a real-time weather statistics application.",
    technologies: "OpenWeather API, JS",
    imageUrl: proj7,
    link: "https://weather-stats-app.netlify.app/",
  },
  {
    title: "Portfolio Site",
    description:
      "A personal portfolio site showcasing pixel-perfect design and customized with Pug and JavaScript.",
    technologies: "Pug, JS, PixelPerfect",
    imageUrl: proj8,
    link: "https://bucolic-blancmange-6ee124.netlify.app/",
  },
  {
    title: "Social Media Links Page",
    description:
      "An intermediary page for social media links, designed minimally with Pug and JavaScript.",
    technologies: "Pug, JS",
    imageUrl: proj9,
    link: "https://effortless-palmier-7046d5.netlify.app/",
  },
  {
    title: "Crypto Casino Section",
    description:
      "A section of a crypto-casino website, featuring interactive elements made with Pug and JavaScript.",
    technologies: "Pug, JS",
    imageUrl: proj10,
    link: "https://cosmic-gnome-ce098c.netlify.app/",
  },
  {
    title: "Interactive Cards",
    description:
      "A site featuring interactive, flipping cards, designed with precision using Pug, JavaScript, and PixelPerfect.",
    technologies: "Pug, JS, PixelPerfect",
    imageUrl: proj11,
    link: "https://effulgent-llama-30370e.netlify.app/",
  },
  {
    title: "Cinema Showcase",
    description:
      "An online cinema example page showcasing film selections with an elegant design in Pug and JavaScript.",
    technologies: "Pug, JS",
    imageUrl: proj12,
    link: "https://chic-dragon-63d595.netlify.app/",
  },
  {
    title: "Automated News Telegram Bot",
    description:
      "A Telegram bot delivering automated news updates, powered by NodeJS and Axios.",
    technologies: "NodeJS, Axios",
    imageUrl: proj13,
    link: "https://t.me/css_daily",
  },
];

export default function Examples() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={styles.TargetContainer}>
      <div className={styles.TargetBackground} />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={fadeIn}>
          <Title title="Examples" />
        </motion.div>
        
        <motion.div className={styles.TargetItems} variants={container}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.TargetItem}
              variants={fadeIn}
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                className={styles.ProjectImage}
                priority={index < 6}
              />
              <div className={styles.ProjectContent}>
                <h3 className={styles.ProjectTitle}>{project.title}</h3>
                <p className={styles.ProjectDescription}>{project.description}</p>
                <p className={styles.ProjectTechnologies}>
                  {project.technologies}
                </p>
                <a
                  href={project.link}
                  className={styles.ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <FaCircleArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
              "@type": "SoftwareApplication",
              "position": index + 1,
              "name": project.title,
              "description": project.description,
              "applicationCategory": "WebApplication",
              "operatingSystem": "Any",
              "url": project.link,
              "author": {
                "@type": "Person",
                "name": "Serhii Krepets"
              }
            }))
          })
        }}
      />
    </section>
  );
}
