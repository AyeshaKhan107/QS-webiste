
import Contact from "../Components/Contact";
import Header from "../Components/Header";

export const metadata = {
  title: "Contact | Qamar Advertising",
  description: "Get in touch for signboards, stickers, LED and branding solutions in Sharjah.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
       <Contact />
    </main>
  );
}
