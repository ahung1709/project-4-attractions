import { Link } from 'react-router-dom';
import AttractionCard from "../../components/AttractionCard/AttractionCard";

export default function AllAttractionPage({attractions}) {
    const attractionsEls = attractions.map(function(attraction) {
        return <AttractionCard key={attraction.name} attraction={attraction} />
    })

    return (        
        <main className="AllAttractionPage">
            <h1>World Attractions</h1>
            <Link className="Pad" to="/attractions/new">New Attraction</Link>
            <div className="">{attractionsEls}</div>
        </main>
    )
}