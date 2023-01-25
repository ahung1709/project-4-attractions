import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';

export default function MyAttractionPage() {
    return (
        <main className="MyAttractionPage">
            <SideBar />
            <h1>MyAttractionPage</h1>
            <Link className="Pad" to="/attractions/new">New Attraction</Link>
    
        </main>
    )
}