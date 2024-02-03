import './AppHeader.css'
import '../../../styles/flex-classes.css'
import { AppNavbar } from "../../AppNavbar/AppNavbar.tsx";

export const AppHeader = () => {

    return (
        <header className="space-between-row-center-flex" style={{position: "fixed", background: "white", zIndex: 10}}>
            <div className="header__logo">
                <a href="/">Aleksei.dev</a>
            </div>
            <AppNavbar/>
        </header>
    )
}

