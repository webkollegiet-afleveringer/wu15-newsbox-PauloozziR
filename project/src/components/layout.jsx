import { Outlet, useLocation, NavLink } from "react-router";
import SiteHeader from "../components/site-header";
import SiteMenu from "../components/site-menu";
import Search from "../components/search";
import { useEffect } from "react";

export default function Layout() {
    let location = useLocation();
    
    useEffect(() => {
        document.body.classList.add(localStorage.getItem("theme"));
        document.getElementById("site-heading").classList.add(localStorage.getItem("theme"));
    }, []);

    return (
        <>
            <header>
                <NavLink to={"/"}>
                    <SiteHeader />
                </NavLink>
                {location.pathname === "/" && <div><Search /></div>}
            </header>
            <main>
                <Outlet />
            </main>
            <SiteMenu />
        </>
    )
}