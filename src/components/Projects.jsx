import React, {useEffect, useRef} from 'react';
import Clock from "./Clock/Clock";
import './style/Projects.css'
import ProjectsList from "./ProjectsList/ProjectsList";


const Projects = () => {
    const projectsPage = useRef();

    useEffect(() => {
        setTimeout(() => {projectsPage.current.style.opacity = 1;}, 0)
    }, [])

    return (
        <div className='projects-page' ref={projectsPage}>
            <Clock/>
            <ProjectsList/>
        </div>
    );
};

export default Projects;