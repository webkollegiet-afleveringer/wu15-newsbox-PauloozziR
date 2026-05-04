import { useState, useEffect } from 'react';

export default function useFetchCachedData(key, url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("Error " + response.status);
            }

            const result = await response.json();
            setData(result);
            
            if(key) {
                sessionStorage.setItem(key, JSON.stringify(result));
                sessionStorage.setItem(key + "_expires", Date.now() * 1000 * 60 * 120);
            }

        } catch(error) {
            setError(error.message);
            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        let cachedData = null;
        let cacheExpires = null;

        if(key) {
            cachedData = sessionStorage.getItem(key);
            cacheExpires = sessionStorage.getItem(key + "_expires");
        }

        if(cachedData && cacheExpires && Date.now() < parseInt(cacheExpires)) {
            setData(JSON.parse(cachedData));
            setLoading(false);
            return
        }

        fetchData(url);
    }, [url, key]);

    return { data, loading, error };
}