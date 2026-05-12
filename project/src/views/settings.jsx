import SiteHeader from "../components/site-header";
import SiteMenu from "../components/site-menu";
import CategoryList from "../components/category-list";
import { useEffect, useRef } from "react";

export default function Settings() {
    const toggleRef = useRef();
    const toggleTheme = () => {
        if (localStorage.getItem("theme") === "light") {
            document.getElementById("root").classList.remove("light");
            document.getElementById("site-heading").classList.remove("light");
            toggleRef.current.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.getElementById("root").classList.remove("dark");
            document.getElementById("site-heading").classList.remove("dark");
            toggleRef.current.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        document.getElementById("root").classList.add(localStorage.getItem("theme"));
        document.getElementById("site-heading").classList.add(localStorage.getItem("theme"));
        toggleRef.current.classList.add(localStorage.getItem("theme"));
    }
    useEffect(() => {
        toggleRef.current.classList.add(localStorage.getItem("theme"));
    }, []);

    return (
        <>
            <h1 className="settings-heading">Settings</h1>
            <h2 className="category-heading">Categories</h2>
            <CategoryList />
            <div className="theme-box" onClick={toggleTheme}>
                <button className="theme-btn" ref={toggleRef}>Toggle dark mode</button>
            </div>
            <footer className="site-version-number">Version 4.8.15.16.23.42</footer>
        </>
    )
}