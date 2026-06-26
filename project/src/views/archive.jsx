import SiteHeader from "../components/site-header";
import SiteMenu from "../components/site-menu";

export default function Archive() {
    let getArticleString = localStorage.getItem("archiveList");
    let retArray = JSON.parse(getArticleString)

console.log(getArticleString);

    return (
        <>
            {/* <div className="archive-category__content">
                {getArticleString.map(article => (
                    <ArticleCard key={article.title} article={article} />
                ))}
            </div> */}
        </>
    )
}