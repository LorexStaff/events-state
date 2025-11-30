import React from "react";

const ProjectList = ({ projects }) => {
  const col0 = [];
  const col1 = [];
  const col2 = [];

  projects.forEach((project, index) => {
    if (index % 3 === 0) col0.push(project);
    else if (index % 3 === 1) col1.push(project);
    else col2.push(project);
  });

  return (
    <div className="project-columns">
      <div className="project-column">{col0.map(renderProject)}</div>
      <div className="project-column">{col1.map(renderProject)}</div>
      <div className="project-column">{col2.map(renderProject)}</div>
    </div>
  );
};

const renderProject = (project) => (
  <div key={project.id} className="project-item">
    <img src={project.imageUrl.trim()} alt={project.title} loading="lazy" />
  </div>
);

export default ProjectList;
