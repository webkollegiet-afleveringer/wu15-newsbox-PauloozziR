/* import useFetchCachedData from '../hooks/useFetchCachedData'; */
/* import SiteLogo from "../assets/images/newsify-logo.svg";
import HealthList from '../components/health-list';
import SportsList from '../components/sports-list';
import TravelList from '../components/travel-list'; */
import { useSearchParams } from "react-router";
import { useContext } from "react";
import { searchContext } from "../contexts/search-context";
import { useQuery } from '@tanstack/react-query';
import useCachedQuery from '../hooks/useCachedQuery';
import Detail from '../components/detail';

export default function Home() {
    const { keyword, setKeyword } = useContext(searchContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const showEurope = localStorage.getItem("europe") || "true";
    const showHealth = localStorage.getItem("health") || "true";
    const showSports = localStorage.getItem("sports") || "true";
    const showBusiness = localStorage.getItem("business") || "true";
    const showTravel = localStorage.getItem("travel") || "true";
    
    /* const { data, isPending, error} = useFetchCachedData(
        "categories",
        "https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS")
    console.log(data); */

    const { data: europeData, isPending: europeIsPending, error: europeError } = showEurope === "true" ? useCachedQuery("europe") : { data: null, isPending: null, error: null };
    const { data: healthData, isPending: healthIsPending, error: healthError } = showHealth === "true" ? useCachedQuery("health") : { data: null, isPending: null, error: null };
    const { data: sportsData, isPending: sportsIsPending, error: sportsError } = showSports === "true" ? useCachedQuery("sports") : { data: null, isPending: null, error: null };
    const { data: businessData, isPending: businessIsPending, error: businessError } = showBusiness === "true" ? useCachedQuery("business") : { data: null, isPending: null, error: null };
    const { data: travelData, isPending: travelIsPending, error: travelError } = showTravel === "true" ? useCachedQuery("travel") : { data: null, isPending: null, error: null };

    /* const { data: dataHealth, loading: loadingHealth, error: errorHealth } = useFetchCachedData(
        "health",
        "https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS");
    const { data: dataSports, loading: loadingSports, error: errorSports } = useFetchCachedData(
        "sport",
        "https://api.nytimes.com/svc/news/v3/content/nyt/sports.json?api-key=3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS");
    const { data: dataTravel, loading: loadingTravel, error: errorTravel } = useFetchCachedData(
        "travel",
        "https://api.nytimes.com/svc/news/v3/content/nyt/travel.json?api-key=3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS"); */

    return (
        <>
            {showEurope === "true" && (!europeIsPending && <Detail category="EUROPE" articles={europeData.results} />)}
            {europeError && <h2>{healthError}</h2>}
            {europeIsPending && <h2>Loading...</h2>}

            {showHealth === "true" && (!healthIsPending && <Detail category="HEALTH" articles={healthData.results} />)}
            {healthError && <h2>{healthError}</h2>}
            {healthIsPending && <h2>Loading...</h2>}

            {showSports === "true" && (!sportsIsPending && <Detail category="SPORTS" articles={sportsData.results} />)}
            {sportsError && <h2>{sportsError}</h2>}
            {sportsIsPending && <h2>Loading...</h2>}

            {showBusiness === "true" && (!businessIsPending && <Detail category="BUSINESS" articles={businessData.results} />)}
            {businessError && <h2>{healthError}</h2>}
            {businessIsPending && <h2>Loading...</h2>}

            {showTravel === "true" && (!travelIsPending && <Detail category="TRAVEL" articles={travelData.results} />)}
            {travelError && <h2>{travelError}</h2>}
            {travelIsPending && <h2>Loading...</h2>}

            {/* <details name="news">
                <summary className='news-header'>
                    <span>
                        <img src={SiteLogo} alt="Newsify logo" />
                        <h2>HEALTH</h2>
                    </span>
                </summary>
                {dataHealth && dataHealth.results.map((health) =>
                    <a key={health.title} href={health.url} target='blank'>
                        <HealthList health={health} />
                    </a>)}
                {errorHealth && <h2>{errorHealth}</h2>}
                {loadingHealth && <h2>Loading...</h2>}
            </details>
            
            <details name="news">
                <summary className='news-header'>
                    <span>
                        <img src={SiteLogo} alt="Newsify logo" />
                        <h2>SPORT</h2>
                    </span>
                </summary>
                {dataSports && dataSports.results.map((sport) =>
                    <a key={sport.title} href={sport.url} target='blank'>
                        <SportsList sport={sport} />
                    </a>)}
                {errorSports && <h2>{errorSports}</h2>}
                {loadingSports && <h2>Loading...</h2>}
            </details>
            
            <details name="news">
                <summary className='news-header'>
                    <span>
                        <img src={SiteLogo} alt="Newsify logo" />
                        <h2>TRAVEL</h2>
                    </span>
                </summary>
                {dataTravel && dataTravel.results.map((travel) =>
                    <a key={travel.title} href={travel.url} target='blank'>
                        <TravelList travel={travel} />
                    </a>)}
                {errorTravel && <h2>{errorTravel}</h2>}
                {loadingTravel && <h2>Loading...</h2>}
            </details> */}
        </>
    )
}