import "./contacts.css"

const Contacts = () => {
  return (
    <div className="contacts-box">
        <h2 id="id-contacts" className="contacts-anchor">Contacts Anchor</h2>
        <h2 className="contacts-title">Contacts</h2>
        <div className="contacts-information">
          <h3 className="contacts-sub-title">Get In Touch</h3>
          <p className="contacts-message">I&#39;m always open to chat, and meet new people. Whether it&#39;s a question, or to just say hi, feel free to reach out!</p>
          
          {/* mailto:naelaadam02@gmail.com */}
          <a className="contacts-mail" href="mailto:adamyunau@gmail.com">
            <button className="contacts-mail-button">
                Say Hello
            </button>
          </a>
        </div>
    </div>
  );
};

export default Contacts;
