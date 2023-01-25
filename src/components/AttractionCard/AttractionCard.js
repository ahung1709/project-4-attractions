import { Link } from "react-router-dom";
import "./AttractionCard.css";

export default function AttractionCard({ attraction }) {
    return (
      <main className="AttractionCard">
        <Link className="card-link" to={`/attractions/${attraction.name}`}>
          <div
            className="card-container"
            style={{
              background: `url(${attraction.coverPicture}) no-repeat`,
              backgroundSize: "cover"
            }}
          >
            <div className="attraction-info">
              <h3>{attraction.name}</h3>
              <h4>Description: {attraction.Description}</h4>
            </div>
          </div>
        </Link>
      </main>
    );
  }
  