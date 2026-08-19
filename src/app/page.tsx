import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Simulator from "@/components/Simulator";
import Steps from "@/components/Steps";
import Conditions from "@/components/Conditions";
import WhyWR from "@/components/WhyWR";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Simulator />
        <Steps />
        <Conditions />
        <WhyWR />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
