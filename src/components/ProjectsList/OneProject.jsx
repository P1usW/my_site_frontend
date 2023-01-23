import React from 'react';
import '../style/OneProject.css'

const OneProject = ({project}) => {

    return (
        <div className='one-project'>
            <a className='git-hub-link' href={project.url} target='_blank' rel='noreferrer noopener'>{project.name}</a>
            <p>{project.aboutProject}</p>
            <p>Языки программировния: {project.language.map((value, index) => <span key={index} className='lang'>{value} </span>)}</p>
        </div>
    );
};

export default OneProject;