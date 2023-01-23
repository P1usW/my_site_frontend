import {useState} from 'react';
import OneProject from "./OneProject";
import '../style/ProjectsList.css'

const ProjectsList = () => {
    const [projects] = useState([
        {id: 1, name: 'chess', language: ['JavaScript'], aboutProject: 'Шахматы', url: 'https://github.com/P1usW/chess'},
        {id: 2, name: 'djangoChat', language: ['Python', 'JavaScript'], aboutProject: 'Веб-сокет чат на django', url: 'https://github.com/P1usW/djangoChat'},
        {id: 3, name: 'djangoProject', language: ['Python', 'JavaScript'], aboutProject: 'Новостной сайт', url: 'https://github.com/P1usW/djangoProject'},
        {id: 4, name: 'Messenger-on-Flask', language: ['Python'], aboutProject: 'Небольшой мессенджер', url: 'https://github.com/P1usW/Messenger-on-Flask'},
    ])

    return (
        <div className='projects-list'>
            {projects.map((project, i) =>
                <OneProject key={project.id} project={project}/>
            )}
        </div>
    );
};

export default ProjectsList;