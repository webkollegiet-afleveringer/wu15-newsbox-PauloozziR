import SiteHeader from "../components/site-header";
import SiteMenu from "../components/site-menu";
import CategoryList from "../components/category-list";

export default function Home() {
    const toggleTheme = () => {
        if (localStorage.getItem("theme") === "light") {
            document.getElementById("root").classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.getElementById("root").classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        document.getElementById("root").classList.add(localStorage.getItem("theme"));
    }

    return (
        <>
            <h1 className="settings-heading">Settings</h1>
            <h2 className="category-heading">Categories</h2>
            <CategoryList />
            <div className="theme-box" onClick={toggleTheme}>
                <button className="theme-btn">Toggle dark mode</button>
            </div>
            <footer className="site-version-number">Version 4.8.15.16.23.42</footer>
        </>
    )
}