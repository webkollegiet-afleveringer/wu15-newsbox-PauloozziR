import SiteLogo from "../../assets/images/newsify-logo.svg";
import "./site-header.scss"

export default function SiteHeader() {
    
    return (
        <div className="site-header">
            <img src={SiteLogo} alt="Newsify logo" />
            <h1>Newsify</h1>
        </div>
    )
}