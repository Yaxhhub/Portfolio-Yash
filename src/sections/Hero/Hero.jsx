import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
// import CV from '../../assets/cv.pdf';
import CV from '../../assets/yash resume.pdf'
import { useTheme } from '../../common/ThemeContext';


function Hero() {

const {theme, toggleTheme} = useTheme();

const themeIcon= theme === 'light' ? sun : moon ;
const twitterIcon= theme === 'light' ? twitterLight : twitterDark ;
const githubIcon= theme === 'light' ? githubLight : githubDark ;
const linkedinIcon= theme === 'light' ? linkedinLight : linkedinDark ;

  return <section id='Hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode Icon" onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
        <h1>Yash <br/>Rajput</h1>
        <h2>Student/ Developer</h2>
        <span>
            <a href="https://www.instagram.com/yaxh_rajput?igsh=MXZhbmc3NXhtZjV2ZA==" target='_blank'>
                <img src={twitterIcon} alt="Twiter icon" />
            </a>
            <a href="https://github.com/Yaxhhub" target='_blank'>
                <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/yaxh-rajput/" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
        </span>
        <p className={styles.description}>This is just makeup to coverup. <br />Click on Resume for more.</p>
        <a href={CV} download>
            <button className='hover'>Resume</button>
        </a>


    </div>
  </section> 
}

export default Hero;