import styles from "./about.module.css"
import aboutme from "../img/aboutheading.png"


const Aboutme = () =>{
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">

                <div className={styles.wrap} data-aos="fade-up" data-aos-duration="1000">
                    <img src={aboutme} alt="" />
                    <div className={styles.about}>
                        <div className={styles.content} data-aos="slide-left" data-aos-delay="00" data-aos-duration="1100">
						Margaret Oluwadare is a dynamic professional with a passion for technology and innovation. She has over 10 years of experience in project management, 
						strategic planning, and business development. Margaret is currently a Senior Project Manager at a leading technology consulting firm and has delivered 
						keynote speeches at industry events. She holds a Bachelor's degree in Mathematics and Statistics, an Associate degree in Data Science and AI, and a Master's 
						degree in Computer-Aided Statistics from a top university.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme