import headerPortraitPic from "./../assets/personal/header-portrait.jpg";
import headerSquarePic from "./../assets/personal/header-square.jpg";
import githubIcon from "./../assets/icons/github.svg";
import linkedinIcon from "./../assets/icons/linkedin.svg";
import twitterIcon from "./../assets/icons/twitter.svg";

export default function Header() {
  return (
    <section className="header">
      <div className="left-section">
        <picture>
          <source srcSet={headerPortraitPic} media="(max-width: 660px)" />
          <source srcSet={headerSquarePic} media="(min-width: 660px)" />
          <img
            src={headerSquarePic}
            alt="presenting"
            className="header-image"
          />
        </picture>

        <h1>Omar Naguib</h1>
      </div>
      <div className="about">
        <h2>About me</h2>
        <p>
          I am a web developer and a CS graduate who spends his time bettering
          his knowledge and making projects. <br />
          Lately, i have been contributing and helping at{" "}
          <a href="https://theodinproject.com/">The Odin Project</a>. <br />
          My most proud work is the <a href="#Battleship">
            battleship game
          </a>{" "}
          for the effort and modular design displayed in the code.
        </p>
        <div className="links">
          <a
            href="https://github.com/OmarNaguib"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
          >
            <img src={githubIcon} alt="" className="icon rotate" />
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
      {/* <div className="background"></div> */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="background"
      >
        <polygon points="0,0 100,0 100,60 0,100"></polygon>
      </svg>
    </section>
  );
}
