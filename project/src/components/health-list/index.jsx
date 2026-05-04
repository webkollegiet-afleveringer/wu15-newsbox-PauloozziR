
export default function HealthList({ health }) {
    const { title, abstract, multimedia } = health;

    const limitWords = (text) => { //deler tekst op så der ikke er for mange ord
        if (!text) return "";
        const words = text.split(" ");
        if (words.length <= 4) return text;
        return words.slice(0, 10).join(" ") + "...";
    }

    return (
        <>
            <img src={multimedia[0].url} alt={multimedia[0].caption} />
            <span>
                <h3>{title}</h3>
                <p>{limitWords(abstract)}</p>
            </span>
        </>
    )
}