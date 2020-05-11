import React from 'react'

const ProjectList = props => {
  return (
    <div>
      {props.projects.length > 0 && <h2>Projects:</h2>}

      {props.projects.map(project => {
        return (
          <div key={project._id}>
            <h3>
              {project.title}
            </h3>
          </div>
        );
      })}
    </div>
  )
}

export default ProjectList;