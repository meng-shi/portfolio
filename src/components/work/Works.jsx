import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { projectData } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    const[item, setItem] = useState({ name: "all"});
    const [projects, setProjects] =  useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectData);
        }
        else {
            const newProjects = projectData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    };
  return (
    <div>

        <div>
            {projects.map((item) => {
                return <WorkItems item={item} key={item.id} />
            })}
        </div>
    </div>
  )
}

export default Works