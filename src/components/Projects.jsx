import data from "../assets/data";
import githubIcon from "./../assets/icons/github.svg";
import openIcon from "./../assets/icons/open-in-new.svg";
export default function Projects() {
  const projects = data.map((dataItem) => {
    return (
      <li
        key={dataItem.name}
        id={dataItem.name}
        className="project"
        aria-labelledby={dataItem.id + "Header"}
        aria-describedby={dataItem.id + "Description"}
      >
        <img src={dataItem.screenshot} alt={dataItem.name + " screenshot"} />
        <div className="row">
          <h3 id={dataItem.id + "Header"}>{dataItem.name}</h3>
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
        <p id={dataItem.id + "Description"}>{dataItem.description}</p>
      </li>
    );
  });
  return (
    <section className="work" aria-labelledby="my-work">
      <h2 id="my-work">My Work</h2>
      <ul className="projects">{projects}</ul>
    </section>
  );
}
