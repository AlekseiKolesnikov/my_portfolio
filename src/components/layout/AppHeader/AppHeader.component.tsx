import './AppHeader.component.css'
import '../../../styles/flex-classes.css'
import { AppNavbar } from "../../AppNavbar/AppNavbar.component.tsx";

export const AppHeader = () => {

    return (
        <header className="space-between-row-center-flex">
            <div className="header__logo">
                <a href="/">Aleksei.dev</a>
            </div>
            <AppNavbar/>
        </header>
    )
}

