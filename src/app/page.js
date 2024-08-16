import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
