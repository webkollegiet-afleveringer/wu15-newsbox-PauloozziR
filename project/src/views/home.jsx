/* import { useSearchParams } from "react-router";
import { useContext } from "react";
import { searchContext } from "../contexts/search-context"; */
import { useQuery } from '@tanstack/react-query';
import useCachedQuery from '../hooks/useCachedQuery';
import Detail from '../components/detail';

export default function Home() {
    /* const { keyword, setKeyword } = useContext(searchContext);
    const [searchParams, setSearchParams] = useSearchParams(); */
    const showEurope = localStorage.getItem("europe") || "true";
    const showHealth = localStorage.getItem("health") || "true";
    const showSports = localStorage.getItem("sports") || "true";
    const showBusiness = localStorage.getItem("business") || "true";
    const showTravel = localStorage.getItem("travel") || "true";
    
    /* const { data, isPending, error} = useFetchCachedData(
        "categories",
        "https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS")
    console.log(data); liste af nyheds kategorier */

    const { data: europeData, isPending: europeIsPending, error: europeError } = showEurope === "true" ? useCachedQuery("europe") : { data: null, isPending: null, error: null };
    const { data: healthData, isPending: healthIsPending, error: healthError } = showHealth === "true" ? useCachedQuery("health") : { data: null, isPending: null, error: null };
    const { data: sportsData, isPending: sportsIsPending, error: sportsError } = showSports === "true" ? useCachedQuery("sports") : { data: null, isPending: null, error: null };
    const { data: businessData, isPending: businessIsPending, error: businessError } = showBusiness === "true" ? useCachedQuery("business") : { data: null, isPending: null, error: null };
    const { data: travelData, isPending: travelIsPending, error: travelError } = showTravel === "true" ? useCachedQuery("travel") : { data: null, isPending: null, error: null };

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
        </>
    )
}