import { NavLink } from "react-router";
import "./site-menu.scss"
import HomeIcon from "../../assets/images/svgs/homeIcon";
import BookmarkIcon from "../../assets/images/svgs/bookmarkIcon";
import StarIcon from "../../assets/images/svgs/starIcon";
import SettingsIcon from "../../assets/images/svgs/settingsIcon";

export default function SiteMenu() {

    return (
        <nav className="siteMenu">
            <NavLink to="/" className={({isActive}) => isActive ? "siteMenu__link--active" : "siteMenu__link"}>
                <HomeIcon />
                <h4>Home</h4>
            </NavLink>
            <NavLink to="/archive" className={({isActive}) => isActive ? "siteMenu__link--active" : "siteMenu__link"}>
                <BookmarkIcon />
                <h4>Archive</h4>
            </NavLink>
            <NavLink to="/popular" className={({isActive}) => isActive ? "siteMenu__link--active" : "siteMenu__link"}>
                <StarIcon />
                <h4>Popular</h4>
            </NavLink>
            <NavLink to="/settings" className={({isActive}) => isActive ? "siteMenu__link--active" : "siteMenu__link"}>
                <SettingsIcon />
                <h4>Settings</h4>
            </NavLink>
        </nav>
    )
}