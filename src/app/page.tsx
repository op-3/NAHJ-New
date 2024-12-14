import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import OpenSource from "../components/OpenSource";
import ContactUs from "../components/ContactUs"; // إضافة استيراد المكون
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <OpenSource />
      <ContactUs /> {/* إضافة المكون هنا */}
      <Footer />
    </main>
  );
}
