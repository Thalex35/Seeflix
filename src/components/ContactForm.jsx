import "./contact.css";

export default function ContactForm() {
  return (
    <section id="contact" className="content_section">
      <div className="section_intro">
        <span className="section_eyebrow">Contact</span>
        <h2>Contact information</h2>
        <p>Email: Theed@seeflix.com</p>
        <p>Instagram: @seeflix</p>
        <p>Phone : (+509)32150000</p>

        <div className="allInput">
          <h2>Get in Touch</h2>
          <div className="myinput_info">
            <div className="input">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name..."
              />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email..."
              />
            </div>
          </div>
          <div className="textarea">
            <label>Message</label>
            <textarea>talk to us</textarea>
          </div>
          <div className="btn_container">
            <button className="btn" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
