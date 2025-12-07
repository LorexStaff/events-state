import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-columns">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <img
            src={project.imageUrl.trim()}
            alt={project.title}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
