import Layout from "../components/Layout";
import ProjectCards from "../components/ProjectCards";

import projects from "../data/portfolio.json";

export default function Projects() {
  console.log(projects);
  return (
    <Layout>
      <div className="container-fluid">
      <h1 className="text-center my-5">Projects</h1>
        <div class="row">
          {projects.map((project) => {
            return (
              <div key={project.id} class="col-md-4 d-flex justify-content-center mb-5">
                <ProjectCards
                  deployed={project.deployed}
                  repo={project.repo}
                  tech={project.tech}
                  name={project.name}
                  img={project.img}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
