import { Link } from "react-router-dom";
import "./AttractionCard.css";

export default function AttractionCard({ attraction }) {
    return (
      <main className="AttractionCard">
        <Link className="card-link" to={`/attractions/${attraction.name}`}>
          <div
            className="card-container"
            // style={{
            //   background: `url(${attraction.coverPicture}) no-repeat`,
            //   backgroundSize: "cover"
            // }}
          >
            <div className="attraction-thumbnail-container">
              <img className="attraction-thumbnail" src={attraction.coverPicture} />
            </div>
            <div className="attraction-info-container">
              <h2 className="" >{attraction.name}</h2>
              <h3 className="" >Location: {attraction.location}</h3>
            </div>
          </div>
        </Link>
      </main>
    );
  }
  