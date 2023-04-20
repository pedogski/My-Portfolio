import  "./project.css"
import crappo from "../img/projects/crappo.png"
import cruvbet from "../img/projects/cruvbet.png"
import fintraka from "../img/projects/fintraka.png"
import ecommerce from "../img/projects/ecommerce.png"
import questio from "../img/projects/questio.png"
import todo from "../img/projects/todo.png"
import writeit from "../img/projects/write-itt.png"

const Projectpage = () =>{
    return(
        <div>
            <section className="portfolio">
                <div className="controlwidth">
                    <h2 data-aos="zoom-in" data-aos-duration="2000">
                        PROJECTS
                    </h2>
                    <div>
                        <div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">InvenTrend</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    Hashnode inspired: This is an inventory management system adaptable to any organization <br/>
                                    Technologies utilized: Python, HTML, CSS, Git $ GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://InvenTrend.netlify.app/" target={"_blank"} rel="noreferrer">STATIC SITE</a>
                                    <a href="https://github.com/MargaretOluwadare/InvenTrend">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={mysql.svg} alt="Smart Inventory" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Quest CBT</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    A computer-based assessment app.<br/>
                                    Technologies utilized: HTML, CSS, BootStrap, JavaScript, Git $ GitHub, Terminal, SQL, Php.
                                </p>
                                <p>
                                    <a href="https://cfd3-102-89-45-205.eu.ngrok.io/CEE/adminpanel/admin" target={"_blank"} rel="noreferrer">STATIC SITE</a>
                                    <a href="https://github.com/MargaretOluwadare/QUEST-CBT">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={reactjs.png} alt="Smart CBT" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Fin-traka Web App</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    A book-keeping web app.<br/>
                                    Technologies utilized: Python, SQL, PhP, React, Nivo Library, Recharts, Git $ GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://fintraka.netlify.app" target={"_blank"} rel="noreferrer">LIVE SITE</a>
                                    <a href="https://github.com/MargaretOluwadare/fin-trakaa">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={fintraka} alt="Book Keeping app" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">PayrollSystem</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    A payroll system adaptable to any organization<br/>
                                    Technologies utilized: Python, Postgresql, HTML, CSS, JavaScript, Git$GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://payrollsystem.netlify.app/" target={"_blank"} rel="noreferrer">STATIC SITE</a>
                                    <a href="https://github.com/MargaretOluwadare/PayrollSystem">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={php.svg} alt="Payroll System" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">VizNet</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    An Internet traffic visualization app .<br/>
                                    Technologies utilized: R, R-shinny, Git $ GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://Viznet.netlify.app/" target={"_blank"} rel="noreferrer">STATIC SITE</a>
                                    <a href="https://github.com/users/pedogski/projects/4">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={elixir.png} alt="Internet visuals" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Practical Machine Learning</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    An app for designed to analyse self quantified movevments using machine learning.<br/>
                                    Technologies utilized: R, HTML, CSS JavaScript, Git $ GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://pml.netlify.app/" target={"_blank"} rel="noreferrer">LIVE SITE</a>
                                    <a href="https://github.com/users/pedogski/projects/3">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={html.png} alt="ML in action" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Real regress</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    A live application of supervised ML (Regression)<br/>
                                    Technologies utilized: R, tex, HTML, CSS, JavaScript, Git$GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://Realregress.netlify.app" target={"_blank"} rel="noreferrer">STATIC SITE</a>
                                    <a href="https://github.com/users/pedogski/projects/1">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={go.png} alt="Regression in action" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
						<div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Central Limit theory</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    An app to calculate anv visulaise central limit theory<br/>
                                    Technologies utilized: R, tex, HTML, CSS, JavaScript, Git$GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://clt.netlify.app" target={"_blank"} rel="noreferrer">STATIC SITE</a>
                                    <a href="https://github.com/users/pedogski/projects/2">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={go.png} alt="CLT in action" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projectpage