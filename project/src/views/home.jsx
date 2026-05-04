import useFetchCachedData from '../hooks/useFetchCachedData';
import SiteHeader from "../components/site-header";
import SiteMenu from "../components/site-menu";
import Search from "../components/search";
import HealthList from '../components/health-list';
import SportsList from '../components/sports-list';
import TravelList from '../components/travel-list';
import { useSearchParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { searchContext } from "../contexts/search-context";
import SiteLogo from "../assets/images/newsify-logo.svg";
import ChevronRight from "../assets/images/chevron-right.svg";
import ChevronDown from "../assets/images/chevron-down.svg";

export default function Home() {
    const { keyword, setKeyword } = useContext(searchContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const { data, loading, error } = useFetchCachedData("https://api.nytimes.com/svc/news/v3/content/content-list.json?api-key=3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS");
    const { data: dataHealth, loading: loadingHealth, error: errorHealth } = useFetchCachedData(
        "health",
        "https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS");
    const { data: dataSports, loading: loadingSports, error: errorSports } = useFetchCachedData(
        "sport",
        "https://api.nytimes.com/svc/news/v3/content/nyt/sports.json?api-key=3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS");
    const { data: dataTravel, loading: loadingTravel, error: errorTravel } = useFetchCachedData(
        "travel",
        "https://api.nytimes.com/svc/news/v3/content/nyt/travel.json?api-key=3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS");
    console.log(data);
    /* const [sportsList, setSportsList] = useState([]);
    useEffect(() => {
        dataSports && setSportsList(...dataSports.results);
    },[]) */
    const [hidden, setHidden] = useState("invisible");
    /* const [hiddenSports, setHiddenSports] = useState("invisible");
    const [hiddenTravel, setHiddenTravel] = useState("invisible"); */
    const [chevronStyle, setChevronStyle] = useState(ChevronRight);
    /* array.forEach(element => {
        
    }); */
    function handleClick() {
        hidden === "invisible" ? setHidden("visible") : setHidden("invisible");
        chevronStyle === ChevronRight ? setChevronStyle(ChevronDown) : setChevronStyle(ChevronRight);
    }
    const [startX, setStartX] = useState(null);
    const [translateX, setTranslateX] = useState(0);
    function handleSwipe() {

    }

    return (
        <>
            <SiteHeader />
            <Search />
            <div className='news-header' onClick={handleClick}>
                <img src={SiteLogo} alt="Newsify logo" />
                <h2>Health</h2>
                <img className='news-chevron' src={chevronStyle} alt="Article chevron" />
            </div>
            <ul>
                {dataHealth && dataHealth.results.map((health) =>
                    <li className={hidden} style={{ transform: `translateX(${translateX})` }} onTouchMove={handleSwipe} key={health.title}>
                        <HealthList health={health} />
                    </li>)}
            </ul>
            {errorHealth && <h2>{errorHealth}</h2>}
            {loadingHealth && <h2>Loading...</h2>}

            <div className='news-header' onClick={handleClick}>
                <img src={SiteLogo} alt="Newsify logo" />
                <h2>Sport</h2>
                <img className='news-chevron' src={chevronStyle} alt="Article chevron" />
            </div>
            <ul>
                {dataSports && dataSports.results.map((sport) =>
                    <li className={hidden} key={sport.title}>
                        <SportsList sport={sport} />
                    </li>)}
            </ul>
            {errorSports && <h2>{errorSports}</h2>}
            {loadingSports && <h2>Loading...</h2>}

            <div className='news-header' onClick={handleClick}>
                <img src={SiteLogo} alt="Newsify logo" />
                <h2>Travel</h2>
                <img className='news-chevron' src={chevronStyle} alt="Article chevron" />
            </div>
            <ul>
                {dataTravel && dataTravel.results.map((travel) =>
                    <li className={hidden} key={travel.title}>
                        <TravelList travel={travel} />
                    </li>)}
            </ul>
            {errorTravel && <h2>{errorTravel}</h2>}
            {loadingTravel && <h2>Loading...</h2>}
            <SiteMenu />
        </>
    )
}