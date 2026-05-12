import { useContext } from "react";
import { useSearchParams } from "react-router";
import { searchContext } from "../../contexts/search-context";
import "./search.scss"

export default function SearchBar() {
    const {keyword, setKeyword} = useContext(searchContext);
    const [searchParams, setSearchParams] = useSearchParams();

    function inputHandler(event) {
        setKeyword(event.target.value);
    }

    return (
        <>
            <input className="search-bar" type="search" name="search" placeholder="Search news" onChange={inputHandler} />
        </>
    )
}