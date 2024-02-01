import './AppLayout.component.css'
import { AppHeader } from "../AppHeader/AppHeader.component.tsx";
import { AppContent } from "../AppContent/AppContent.component.tsx";
import { AppFooter } from "../AppFooter/AppFooter.component.tsx";

export const AppLayout = () => {

    return (
       <div className="wrapper">
         <AppHeader/>
         <AppContent/>
         <AppFooter/>
       </div>
    )
}

