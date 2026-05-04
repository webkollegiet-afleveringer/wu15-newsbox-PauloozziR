import { Link } from "react-router";
import HomeIcon from "../../assets/images/home.svg";
import ArchiveIcon from "../../assets/images/bookmark.svg";
import PopularIcon from "../../assets/images/star.svg";
import SettingsIcon from "../../assets/images/settings.svg";
import "./site-menu.scss";

export default function SiteMenu() {


    return (
        <>
            <div className="site-menu">
                <Link className="menu-link" to={"/"}>
                    <img src={HomeIcon} alt="Home icon" />
                    <h4>Home</h4>
                </Link>
                <Link className="menu-link" to={"/archive"}>
                    <img src={ArchiveIcon} alt="Archive icon" />
                    <h4>Archive</h4>
                </Link>
                <Link className="menu-link" to={"/popular"}>
                    <img src={PopularIcon} alt="Popular icon" />
                    <h4>Popular</h4>
                </Link>
                <Link className="menu-link" to={"/settings"}>
                    <img src={SettingsIcon} alt="Settings icon" />
                    <h4>Settings</h4>
                </Link>
            </div>
        </>
    )
}