import "../Styles/Home.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <FormData />
      <Footer />
    </div>
  );
}

function FormData() {
  return (
    <section id="contact" className="content_section">
      <div className="section_intro">
        <span className="section_eyebrow">Contact</span>
        <h2>You can contact us using our info below?</h2>
        <p>Email: @Thee@seeflix.com</p>
        <p>Instagram: @seeflix</p>
        <input type="text" name="name" placeholder="Your name..." />
        <input type="email" name="email" placeholder="Your email..." />
        <textarea></textarea>
      </div>
    </section>
  );
}
