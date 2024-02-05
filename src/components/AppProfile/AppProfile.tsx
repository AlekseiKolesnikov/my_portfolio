import './AppProfile.css'
import '../../styles/flex-classes.css'
import { motion } from 'framer-motion'
import { Typewriter } from "react-simple-typewriter";

interface ITechStackIcons {
    iconImg: string
    iconAlt: string
    initialPositionX: number
}

const techStackIcons: ITechStackIcons[] = [
    { iconImg: "../../../src/assets/html.icon.svg", iconAlt: "html-icon", initialPositionX: 0 },
    { iconImg: "../../../src/assets/css.icon.svg", iconAlt: "css-icon", initialPositionX: -45 },
    { iconImg: "../../../src/assets/angular.icon.svg", iconAlt: "angular-icon", initialPositionX: -90 },
    { iconImg: "../../../src/assets/react.icon.svg", iconAlt: "react-icon", initialPositionX: -135 },
    { iconImg: "../../../src/assets/ts.icon.svg", iconAlt: "ts-icon", initialPositionX: -180 },
    { iconImg: "../../../src/assets/js.icon.svg", iconAlt: "js-icon", initialPositionX: -225 },
    { iconImg: "../../../src/assets/scss.icon.svg", iconAlt: "scss", initialPositionX: -270 },
]

export const AppProfile = () => {

    return (
        <div className="app-profile__wrapper">
            <div className="app-profile__box space-between-column-start-flex">
                <div className="app-profile__personal-inf-box space-between-row-center-flex">
                    <motion.div
                        className="app-profile__profile-text-box space-between-column-start-flex"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="app-profile__label-text">
                            <span className="greetings">Hi, my name is</span>
                            <br/>
                            Aleksei Kolesnikov
                            <br/>
                            <span className="developer">
                                and I'm a
                                <span>
                                            <Typewriter
                                                words={[' Frontend Developer']}
                                                loop={1}
                                                cursor
                                                cursorStyle='|'
                                                typeSpeed={70}
                                                delaySpeed={500}
                                            />
                                </span>
                            </span>
                        </h1>
                        <p className="app-profile__description-text">
                            Hi, I'm Aleksei Kolesnikov originally from Pyatigorsk, Russia.
                            A passionate Frontend Developer based in Montevallo, Alabama. 📍
                        </p>
                        <div className="app-profile__link-icons-box space-between-row-center-flex">
                            <a href="https://www.linkedin.com/in/aleksei-kolesnikov-848a03250/">
                                <img src="./../../../src/assets/linkedIn.icon.svg" alt="linkedin-icon"/>
                            </a>
                            <a href="https://github.com/AlekseiKolesnikov">
                                <img src="./../../../src/assets/github.icon.svg" alt="github-icon"/>
                            </a>
                        </div>
                    </motion.div>
                    <div className="shape-container center-flex">
                        <motion.img
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ duration: 0.5 }}
                            style={{ width: 280, }}
                            src="./../../../src/assets/profile_img.png"
                            alt="profile_img"/>
                    </div>
                </div>
                <motion.div
                    className="app-profile__stack-inf-box space-between-row-center-flex"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="app-profile__stack-label">
                        <h3>Tech Stack</h3>
                    </div>
                    <div className="app-profile__stack-icons space-between-row-center-flex">
                        {techStackIcons.map(icon => <motion.img
                            initial={{ x: icon.initialPositionX, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                            key={icon.iconAlt}
                            style={{ height: 35 }}
                            src={icon.iconImg}
                            alt={icon.iconAlt}
                        />)}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

