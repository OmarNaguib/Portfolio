import data from "../assets/data";
import githubIcon from "./../assets/icons/github.svg";
import openIcon from "./../assets/icons/open-in-new.svg";
export default function Projects() {
  const projects = data.map((dataItem) => {
    return (
      <div key={dataItem.name} className="project">
        <img src={dataItem.screenshot} alt={dataItem.name + " screenshot"} />
        <div className="row">
          <h2>{dataItem.name}</h2>
          <div className="links">
            <a
              href={dataItem.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={dataItem.name + " repo"}
            >
              <img src={githubIcon} alt="" className="icon" />
            </a>
            <a
              href={dataItem.live}
              target="_blank"
              rel="noreferrer"
              aria-label={dataItem.name + " live website"}
            >
              <img src={openIcon} alt="" className="icon" />
            </a>
          </div>
        </div>
        <p>{dataItem.description}</p>
      </div>
    );
  });
  return (
    <section className="work">
      <h1>My Work</h1>
      <div className="projects">{projects}</div>
    </section>
  );
}
