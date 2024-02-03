import './AppProfile.css'
import '../../styles/flex-classes.css'

interface ITechStackIcons {
    iconImg: string
    iconAlt: string
}

const techStackIcons: ITechStackIcons[] = [
    { iconImg: "../../../src/assets/html.icon.svg", iconAlt: "html-icon" },
    { iconImg: "../../../src/assets/css.icon.svg", iconAlt: "css-icon" },
    { iconImg: "../../../src/assets/angular.icon.svg", iconAlt: "angular-icon" },
    { iconImg: "../../../src/assets/react.icon.svg", iconAlt: "react-icon" },
    { iconImg: "../../../src/assets/ts.icon.svg", iconAlt: "ts-icon" },
    { iconImg: "../../../src/assets/js.icon.svg", iconAlt: "js-icon" },
    { iconImg: "../../../src/assets/scss.icon.svg", iconAlt: "scss" },
]

export const AppProfile = () => {

    return (
        <div className="app-profile__wrapper">
            <div className="app-profile__box space-between-column-start-flex">
                <div className="app-profile__personal-inf-box space-between-row-center-flex">
                    <div className="app-profile__profile-text-box space-between-column-start-flex">
                        <h1 className="app-profile__label-text">
                            Front-End Angular/React Developer 👋
                        </h1>
                        <p className="app-profile__description-text">
                            Hi, I'm Aleksei Kolesnikov originally from Pyatigorsk, Russia.
                            A passionate Front-end Angular/React Developer based in Montevallo, Alabama. 📍
                        </p>
                        <div className="app-profile__link-icons-box space-between-row-center-flex">
                            <a href="https://www.linkedin.com/in/aleksei-kolesnikov-848a03250/">
                                <img src="./../../../src/assets/linkedIn.icon.svg" alt="linkedin-icon"/>
                            </a>
                            <a href="https://github.com/AlekseiKolesnikov">
                                <img src="./../../../src/assets/github.icon.svg" alt="github-icon"/>
                            </a>
                        </div>
                    </div>
                    <div className="shape-container center-flex">
                        <img style={{ width: 280, }} src="./../../../src/assets/profile_img.png" alt="profile_img"/>
                    </div>
                </div>
                <div className="app-profile__stack-inf-box space-between-row-center-flex">
                    <div className="app-profile__stack-label">
                        <h3>Tech Stack</h3>
                    </div>
                    <div className="app-profile__stack-icons space-between-row-center-flex">
                        {techStackIcons.map(icon => <img key={icon.iconAlt} style={{ height: 35 }} src={icon.iconImg}
                                                         alt={icon.iconAlt}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

