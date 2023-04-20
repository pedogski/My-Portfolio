import styles from "./hero.module.css"
import view from "../img/view.png"
import { Link } from 'react-router-dom'

const Hero = () => {
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">

                <div className={styles.hero}>
                    <div className={styles.text}>
                        <h1>Hello, I am <br/>Margaret Oluwadare</h1>
                        <h4>Data Scientist/Engineer</h4>
                        <div className={styles.button}>
                            <Link to="/projects" style={{color:'inherit', textDecoration: 'none'}}><button className={styles.first}>View my work <img src={view} alt="" /></button></Link>
                            <Link to="/contact" style={{color:'inherit', textDecoration: 'none'}}><button>Contact Me</button></Link>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Hero 