import profilePicPortrait from "./../assets/personal/profile.jpg";
import profilePicLandscape from "./../assets/personal/profile-landscape.jpg";
import githubIcon from "./../assets/icons/github.svg";
import linkedinIcon from "./../assets/icons/linkedin.svg";
import twitterIcon from "./../assets/icons/twitter.svg";

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
            aria-label="github"
          >
            <img src={githubIcon} alt="" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/omarnaguib0/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <img src={linkedinIcon} alt="" className="icon" />
          </a>
          <a href="" target="_blank" rel="noreferrer" aria-label="linkedin">
            <img src={twitterIcon} alt="" className="icon" />
          </a>
        </div>
      </div>

      <picture>
        <source srcSet={profilePicLandscape} media="(min-width: 1034px)" />
        <source srcSet={profilePicPortrait} media="(max-width: 1034px)" />
        <img src={profilePicPortrait} alt="" className="contact-image" />
      </picture>
    </section>
  );
}
