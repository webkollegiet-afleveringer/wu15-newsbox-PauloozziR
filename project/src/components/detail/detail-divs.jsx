import "./detail-divs.scss"
import SiteLogo from "../../assets/images/svgs/newsifyLogo";
import ArticleCard from "../article-card";
import { useRef, useState } from "react";

export default function Detail({ category, articles }) {

    // til news header lavet med div
    const [open, setOpen] = useState(false)
    const contentRef = useRef(null)

    function handleDetailClick(event) {
        const contentDom = contentRef.current            

        const contentHeight = contentDom.scrollHeight
        if(!open) { // folder content ud
            contentDom.style.height = `${contentHeight}px`
        }
        else { // folder content sammen
            contentDom.style.height = "0px"
        }
        setOpen(!open)
    }

    return (
        <>
            <div className='category-details'>
                <div className="category-details__summary" onClick={handleDetailClick}>
                    <SiteLogo />
                    <h2>{category}</h2>
                </div>
                <div className="category-details__content" ref={contentRef}>
                    {articles.map(article => (
                        <ArticleCard key={article.title} article={article} />
                    ))}
                </div>
            </div>
        </>
    )
}