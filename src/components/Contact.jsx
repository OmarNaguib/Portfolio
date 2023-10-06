import profilePicPortrait from "./../assets/personal/profile.jpg";
import profilePicLandscape from "./../assets/personal/profile-landscape.jpg";
import githubIcon from "./../assets/icons/github.svg";
import linkedinIcon from "./../assets/icons/linkedin.svg";
import twitterIcon from "./../assets/icons/twitter.svg";

const mailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path
      fill="currentColor"
      d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"
    />
  </svg>
);

const phoneIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path
      fill="currentColor"
      d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.286 12.857-32.143T165-840h140q14 0 24 10t14 25l26.929 125.641Q372-665 369.5-653.5q-2.5 11.5-10.729 19.726L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.151-15T686-369l119 26q15 4 25 16.044T840-300v135q0 19.286-12.857 32.143T795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"
    />
  </svg>
);

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
        <div className="phone-email">
          <p>{phoneIcon}+2 01000549518</p>
          <p>{mailIcon}omar.nagiub2001@gmail.com</p>
        </div>
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
          <a
            href="https://twitter.com/ON__DEV"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
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
