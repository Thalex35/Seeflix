import "../Styles/Home.css";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/About/HeroAbout.jsx";
import Desc from "../components/About/Desc.jsx";

export default function About() {
  return (
    <div>
      <Header />
      <Hero />
      <Desc />
      <Footer />
    </div>
  );
}
