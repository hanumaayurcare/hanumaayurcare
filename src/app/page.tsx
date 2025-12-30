import Image from "next/image";
import AyurvedicHeroBanner from "@/src/components/hero"; // Adjust the path based on your project structure
import AboutSnapshot from "@/src/components/about";
import WhatWeDoSnapshot from "../components/whatwedo";
import Bestsellers from "../components/bestsellers";
import AyurvedicSolutions from "../components/ayurvedicsolutions";
import Testimonials from "../components/testimonials";
import LatestNews from "../components/blog";
import NewsletterSignup from "../components/newsletter";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <AyurvedicHeroBanner />
      <AboutSnapshot />
      <WhatWeDoSnapshot />
      <Bestsellers />
      <AyurvedicSolutions />
      <Testimonials />
      <LatestNews />
      <NewsletterSignup />
      </div>
  );
}
