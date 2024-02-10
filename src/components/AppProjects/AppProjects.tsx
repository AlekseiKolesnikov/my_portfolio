import './AppProjects.css'
import { ProjectIcon } from "../ProjectIcon/ProjectIcon.tsx";
import { projectIconsData } from "../../data/project-icons.data.ts";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const projectIconsAnimationParams = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
}

export const AppProjects = () => {
    const animationControl = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            animationControl.start("visible");
        }
    }, [animationControl, isInView]);


    return (
        <div className="app-projects__wrapper space-between-column-center-flex">
            <div className="app-projects__label space-between-column-start-flex">
                <h1>PORTFOLIO</h1>
                <p>Each project is a unique piece of development 🧩</p>
            </div>
            <div
                className="app-projects__projects-box"
                ref={ref}
            >
                {projectIconsData.map((data) => (
                    <motion.div
                        style={{ width: "fit-content", height: "fit-content"}}
                        key={data.projectLabel}
                        initial={"hidden"}
                        variants={projectIconsAnimationParams}
                        transition={{ duration: 0.5 }}
                        animate={animationControl}
                    >
                        <ProjectIcon
                            key={data.projectLabel}
                            projectLabel={data.projectLabel}
                            projectImage={data.projectImage}
                            projectDescription={data.projectDescription}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

