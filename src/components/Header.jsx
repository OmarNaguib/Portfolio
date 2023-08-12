import headerLandscapePic from "./../assets/personal/header-landscape.jpg";
import headerPortraitPic from "./../assets/personal/header-portrait.jpg";
import headerSquarePic from "./../assets/personal/header-square.jpg";

export default function Header() {
  return (
    <section className="header">
      <div className="left-section">
        <picture>
          <source srcSet={headerSquarePic} media="(min-width: 562px)" />
          <source srcSet={headerPortraitPic} media="(max-width: 562px)" />
          <img src={headerSquarePic} alt="presenting" />
        </picture>
        {/* <img src={headerSquarePic} alt="" /> */}
        <h1>Omar Naguib</h1>
      </div>
      <div className="about">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
          vehicula justo sed interdum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse id orci ac mi viverra condimentum eu id
          quam. Praesent leo dolor, iaculis et velit sit amet, lobortis ultrices
          quam. Suspendisse non faucibus nulla, ac interdum urna. In suscipit eu
          massa sit amet euismod. Aliquam venenatis velit ex, vitae tincidunt
          lorem mollis ut.
        </p>
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
    </section>
  );
}
