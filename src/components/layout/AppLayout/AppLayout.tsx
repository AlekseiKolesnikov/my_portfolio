import './AppLayout.css'
import { AppHeader } from "../AppHeader/AppHeader.tsx";
import { AppContent } from "../AppContent/AppContent.tsx";
import { AppFooter } from "../AppFooter/AppFooter.tsx";

export const AppLayout = () => {

    return (
       <div className="wrapper center-column-top-flex">
         <AppHeader/>
         <AppContent/>
         <AppFooter/>
       </div>
    )
}

