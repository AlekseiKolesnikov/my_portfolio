import './AppContent.component.css'
import { AppHome } from "../../../pages/AppHome/AppHome.page.tsx";
import { AppAbout } from "../../../pages/AppAbout/AppAbout.page.tsx";
import { AppProjects } from "../../../pages/AppProjects/AppProjects.page.tsx";
import { AppContacts } from "../../../pages/AppContacts/AppContacts.page.tsx";
import { Route, Routes } from "react-router-dom";

export const AppContent = () => {

    return (
        <div className="content-wrapper">
            <Routes>
                <Route path="/" element={<AppHome/>}/>
                <Route path="/about" element={<AppAbout/>}/>
                <Route path="/projects" element={<AppProjects/>}/>
                <Route path="/contacts" element={<AppContacts/>}/>
            </Routes>
        </div>
    )
}

