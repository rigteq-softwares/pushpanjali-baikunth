import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import FloorPlans from "@/components/FloorPlans";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <FloorPlans />
      <Location />
      <Contact />
      <Footer />
      <StickyContactBar />
    </main>
  );
}
