import './AppAbout.css'

export const AppAbout = () => {

    return (
        <div className="app-about__wrapper space-between-row-center-flex">
          <div className="app-about__image-box">
            <img className="app-about__image" src="../../../src/assets/computer_coffee%20Large.jpg"
                 alt="computer_image"/>
            <div className="app-about__rotating-text-box center-flex"></div>
            <p>🧑‍💻</p>
            <svg className="rotatingText" id="rotatingText" viewBox="0 0 200 200" width="180" height="180">
              <defs>
                <path id="circle" d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            ">
                </path>
              </defs>
              <text width="400">
                <textPath xlinkHref="#circle" className="text">
                  FRONT-END WEB DEVELOPER
                </textPath>
              </text>
            </svg>
          </div>
          <div className="app-about__text-box space-around-column-start-flex">
            <h2 className="app-about__about-label">ABOUT ME</h2>
            <h2 className="app-about__location-text">
              A dedicated Front-end Developer based in Montevallo, Alabama 📍
            </h2>
            <p>As a junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, TypeScript,
              JavaScript, Angular, React, and SCSS. | excel in designing and maintaining responsive websites that
              offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through
              writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am
              also a team player who thrives in collaborating with cross-functional teams to produce outstanding
              web applications.</p>
          </div>
        </div>
    )
}

