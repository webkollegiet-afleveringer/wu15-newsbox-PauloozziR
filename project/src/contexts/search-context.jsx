import { createContext, useState } from "react";

export const searchContext = createContext(null);

export default function SearchProvider({ children }) {
    const [keyword, setKeyword] = useState("");

    return (
        <searchContext.Provider value={{ keyword, setKeyword }}>
            {children}
        </searchContext.Provider>
    )
}