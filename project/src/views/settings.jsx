import SiteHeader from "../components/site-header";
import SiteMenu from "../components/site-menu";

export default function Home() {

    return (
        <>
            <SiteHeader />
            <h1>Settings</h1>
            <h2>Categories</h2>
            <button>Toggle dark mode</button>
            <SiteMenu />
        </>
    )
}