import data from "../assets/data";

export default function Projects() {
  const projects = data.map((dataItem) => {
    return (
      <div key={dataItem.name} className="project">
        <img src={dataItem.screenshot} alt={dataItem.name + " screenshot"} />
        <div className="row">
          <h2>{dataItem.name}</h2>
          <div className="links">
            <a href={dataItem.repo} target="_blank" rel="noreferrer">
              repo
            </a>
            <a href={dataItem.live} target="_blank" rel="noreferrer">
              live
            </a>
          </div>
        </div>
        <p>{dataItem.description}</p>
      </div>
    );
  });
  return (
    <section className="work">
      <div className="projects">
        <h1>My Work</h1>
        {projects}
      </div>
    </section>
  );
}
