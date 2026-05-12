import Bookmark from "../../assets/images/svgs/bookmarkIcon";
import "./article-card.scss";
import { useEffect, useRef, useState } from "react";

export default function ArticleCard({ article }) {
    const articleRef = useRef();
    const bookmarkRef = useRef();
    const [diff, setDiff] = useState(0);

    function handleTouchStart(event) {
        setDiff(event.touches[0].screenX);
    }
    function handleTouchEnd(event) {
        if (diff > event.changedTouches[0].screenX) {
            const distance = diff - event.changedTouches[0].screenX;
            articleRef.current.style.transform = `translateX(-${distance}px)`;
            bookmarkRef.current.classList.remove("invisible");
            /* localStorage.setItem("archivedArticles", JSON.stringify(articleRef.current)); */
        }
    }

    return (
        <>
            <a href={article.url} target='blank'>
                <article className="articleCard" ref={articleRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    {article.multimedia.length && <img src={article.multimedia[0].url} alt={article.multimedia[0].caption} />}
                    <span>
                        <h2 className="articleCard__heading">{article.title}</h2>
                        <p className="articleCard__text">{article.abstract}</p>
                    </span>
                    <span className="archive-box invisible" ref={bookmarkRef}>
                        <Bookmark />
                    </span>
                </article>
            </a>
        </>
    )
}