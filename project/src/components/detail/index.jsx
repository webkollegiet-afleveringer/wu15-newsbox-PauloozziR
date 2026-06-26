import "./detail.scss"
import SiteLogo from "../../assets/images/svgs/newsifyLogo";
import ArticleCard from "../article-card";
import { useRef, useState } from "react";

export default function Detail({ category, articles }) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    function handleClick(event) {
        event.preventDefault();

        const content = contentRef.current;

        if(!open) {
            setOpen(true);
            requestAnimationFrame(() => {
                content.style.height = "0px"
                requestAnimationFrame(() => {
                    content.style.height = content.scrollHeight + "px"
                })
            })
        } 
        else {
            content.style.height = content.scrollHeight + "px"
            requestAnimationFrame(() => {
                content.style.height = "0px"
            })

            content.addEventListener("transitionend", () => { setOpen(false) }, { once: true }
            )
        }
    }

    return (
        <>
            <details open={open}>
                <summary className="news-category" onClick={handleClick}>
                    <span>
                        <SiteLogo />
                        <h2>{category}</h2>
                    </span>
                </summary>
                <div className="news-category__content" ref={contentRef}>
                    {articles.map(article => (
                        <ArticleCard key={article.title} article={article} />
                    ))}
                </div>
            </details>
        </>
    )
}