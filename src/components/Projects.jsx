import data from "../assets/data";

export default function Projects() {
  const projects = data.map((dataItem) => {
    return (
      <div key={dataItem.name} className="project">
        <img src={dataItem.screenshot} alt={dataItem.name + " screenshot"} />
        <div>
          <h2>{dataItem.name}</h2>
          <a href={dataItem.repo} target="_blank" rel="noreferrer">
            repo
          </a>
          <a href={dataItem.live} target="_blank" rel="noreferrer">
            live
          </a>
          <p>{dataItem.description}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <h1>My Work</h1>
      <div className="projects">{projects}</div>
    </section>
  );
}
