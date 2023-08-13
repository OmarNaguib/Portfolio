import profilePicPortrait from "./../assets/personal/profile.jpg";
import profilePicLandscape from "./../assets/personal/profile-landscape.jpg";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Contact me</h2>
        <p className="prompt">
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

      <picture>
        <source srcSet={profilePicLandscape} media="(min-width: 838px)" />
        <source srcSet={profilePicPortrait} media="(max-width: 838px)" />
        <img src={profilePicPortrait} alt="" />
      </picture>
    </section>
  );
}
