import profilePic from "./../assets/personal/profile.jpg";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Contact me</h2>
        <p>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <p>
          Mansoura, <br /> Dakahlia, Egypt
        </p>
        <p>+2 01000549518</p>
        <p>omar.nagiub2001@gmail.com</p>
        <div className="links">
          <a
            href="https://github.com/OmarNaguib"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/omarnaguib0/"
            target="_blank"
            rel="noreferrer"
          >
            linkedIn
          </a>
          <a href="">twitter</a>
        </div>
      </div>
      <img src={profilePic} alt="" />
    </section>
  );
}
