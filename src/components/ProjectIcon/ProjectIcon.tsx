import { motion } from 'framer-motion'
import './ProjectIcon.css'
import './../../styles/flex-classes.css'
import { useState } from "react";
import { IProjectIconsData } from "../../data/project-icons.data.ts";

export const ProjectIcon = (props: IProjectIconsData) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div
            className="project-icon__wrapper center-flex"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <motion.img
                className="project-icon__hoover_style"
                animate={isHover ? { zoom: 1.1 } : {}}
                key={props.projectLabel}
                src={props.projectImage}
                alt={props.projectLabel}
            />
            {isHover &&
                <motion.div
                    className="project-icon__hoover_style"
                    style={{ zIndex: 2 }}
                    initial={{ background: "transparent", opacity: 0 }}
                    whileHover={{
                        backgroundImage: "linear-gradient(to bottom, transparent, black)",
                        opacity: 1,
                        transition: { duration: 0.3 }
                    }}
                >
                    <div className="project-icon__hoover-inf space-between-column-center-flex">
                        <h3>{props.projectLabel}</h3>
                        <img src="src/assets/link-icon.svg" alt="link-icon"/>
                        <p>click to read more</p>
                    </div>
                </motion.div>
            }
        </div>
    )
}

