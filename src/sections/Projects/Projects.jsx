
import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/viberr.png';
import P2 from '../../assets/fresh-burger.png'
import P3 from '../../assets/hipsster.png'
import P4 from '../../assets/fitlift.png'

import ProjectCard from '../../common/ProjectCard';



function Projects() { 
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={Viberr} link='https://desktop.github.com/download/' h3='Project 1' p='Description 1'/>
            <ProjectCard src={P2} link='https://desktop.github.com/download/' h3='Project 2' p='Description 2'/>
            <ProjectCard src={P3} link='https://desktop.github.com/download/' h3='Project 3' p='Description 3'/>
            <ProjectCard src={P4} link='https://desktop.github.com/download/' h3='Project 4' p='Description 4'/>
        </div>
    </section>
  )
}

export default Projects