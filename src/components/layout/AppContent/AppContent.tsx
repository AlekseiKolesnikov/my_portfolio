import './AppContent.css'
import '../../../styles/flex-classes.css'
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../../pages/HomePage/HomePage.tsx";
import { AboutPage } from "../../../pages/AboutPage/AboutPage.tsx";
import { ProjectsPage } from "../../../pages/ProjectsPage/ProjectsPage.tsx";
import { ContactsPage } from "../../../pages/ContactsPage/ContactsPage.tsx";

export const AppContent = () => {

    return (
        <div className="content-wrapper">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
            </Routes>
        </div>
    )
}

