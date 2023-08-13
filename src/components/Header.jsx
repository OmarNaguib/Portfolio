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
          <source srcSet={headerPortraitPic} media="(max-width: 562px)" />
          <source srcSet={headerSquarePic} media="(min-width: 562px)" />
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
          vehicula justo sed interdum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse id orci ac mi viverra condimentum eu id
          quam. Praesent leo dolor, iaculis et velit sit amet, lobortis ultrices
          quam.
        </p>
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
    </section>
  );
}
