import { useQuery } from "@tanstack/react-query";

export default function useCachedQuery(category) {
    async function getNews() {
        const apiKey = "3JFCA4L2or1uyThwEplbSK2Z9hP8e1I4t1QKt3FZhsH4IqSS";
        const endpoint = `https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=${apiKey}`;
        const response = await fetch(endpoint);
    
        if(!response.ok) {
            throw new Error("Error " + response.status + " when trying to get news")
        }
    
        const json = await response.json();
        return json
    }
    const { data, isPending, error } = useQuery({
        queryKey: [category],
        queryFn: getNews,
        staleTime: 1000 * 60 * 60 * 2
    })

    return { data, isPending, error };
}