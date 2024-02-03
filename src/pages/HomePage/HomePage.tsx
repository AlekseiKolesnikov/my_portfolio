import './HomePage.css'
import { AppProfile } from "../../components/AppProfile/AppProfile.tsx";
import { AppAbout } from "../../components/AppAbout/AppAbout.tsx";
import { AppProjects } from "../../components/AppProjects/AppProjects.tsx";

export const HomePage = () => {

    return (
        <div className="center-column-top-flex" style={{ width: '100%', height: 'fit-content' }}>
            <AppProfile/>
            <AppAbout/>
            <AppProjects/>
        </div>
    )
}

