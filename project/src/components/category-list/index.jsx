import SiteLogo from "../../assets/images/svgs/newsifyLogo";
import "./category-list.scss";

export default function CategoryList() {
    const showEurope = localStorage.getItem("europe") || "true";
    const showHealth = localStorage.getItem("health") || "true";
    const showSports = localStorage.getItem("sports") || "true";
    const showBusiness = localStorage.getItem("business") || "true";
    const showTravel = localStorage.getItem("travel") || "true";

    function inputHandler(event) {
        localStorage.setItem(event.target.dataset.category, event.target.checked)
    }

    return(
        <ul className="category-list">
            <li>
                <span>
                    <SiteLogo />
                    <h2>EUROPE</h2>
                </span>
                <div className="category-switch">
                    <input className="switch-toggle" type="checkbox" id="europe" data-category="europe" onInput={inputHandler} defaultChecked={showEurope === "true"} />
                    <label className="switch-base" htmlFor="europe"></label>
                </div>
            </li>
            <li>
                <span>
                    <SiteLogo />
                    <h2>HEALTH</h2>
                </span>
                <div className="category-switch">
                    <input className="switch-toggle" type="checkbox" id="health" data-category="health" onInput={inputHandler} defaultChecked={showHealth === "true"} />
                    <label className="switch-base" htmlFor="health"></label>
                </div>
            </li>
            <li>
                <span>
                    <SiteLogo />
                    <h2>SPORT</h2>
                </span>
                <div className="category-switch">
                    <input className="switch-toggle" type="checkbox" id="sports" data-category="sports" onInput={inputHandler} defaultChecked={showSports === "true"} />
                    <label className="switch-base" htmlFor="sports"></label>
                </div>
            </li>
            <li>
                <span>
                    <SiteLogo />
                    <h2>BUSINESS</h2>
                </span>
                <div className="category-switch">
                    <input className="switch-toggle" type="checkbox" id="business" data-category="business" onInput={inputHandler} defaultChecked={showBusiness === "true"} />
                    <label className="switch-base" htmlFor="business"></label>
                </div>
            </li>
            <li>
                <span>
                    <SiteLogo />
                    <h2>TRAVEL</h2>
                </span>
                <div className="category-switch">
                    <input className="switch-toggle" type="checkbox" id="travel" data-category="travel" onInput={inputHandler} defaultChecked={showTravel === "true"} />
                    <label className="switch-base" htmlFor="travel"></label>
                </div>
            </li>
        </ul>
    )
}