import SiteLogo from "../../assets/images/svgs/newsifyLogo";
import "./site-header.scss"

export default function SiteHeader() {
    
    return (
        <div className="site-header">
            <SiteLogo />
            <h1>Newsify</h1>
        </div>
    )
}