import "./detail.scss"
import SiteLogo from "../../assets/images/svgs/newsifyLogo";
import ArticleCard from "../article-card";

export default function Detail({ category, articles }) {

    return (
        <details>
            <summary className='news-header'>
                <span>
                    <SiteLogo />
                    <h2>{category}</h2>
                </span>
            </summary>
            {articles.map(article => (
                <ArticleCard key={article.title} article={article} />
            ))}
        </details>
    )
}