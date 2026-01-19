import About from "../Components/About";
import WhyChoose from "../Components/WhyChoose";
import Process from "../Components/Process";

export const metadata = {
  title: "About Us | Qamar Advertising",
  description: "Learn about our 10+ years of experience crafting signage and branding in the UAE.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <About />
      <WhyChoose />
      <Process />
    </main>
  );
}
