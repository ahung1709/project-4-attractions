import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./AttractionDetailPage.css";

export default function AttractionDetailPage({ attractions }) {
  let { attractionName } = useParams();
  console.log("attractionName:")
  console.log(attractionName)
  const attractionFound = attractions.find((attraction) => attraction.name === attractionName);

  return (
    <div className="AttractionDetailPage">
      <div className="buttons-container">
        <Link className="Pad" to={`/attractions/${attractionFound._id}/edit`}>Edit</Link>
        <Link className="Pad" to={`/attractions/${attractionFound._id}/delete`}>Delete</Link>
      </div>
      <div className="attraction-detail-containter">       
        <div className="attraction-detail-info">
          <h1>{attractionFound.name}</h1>
          <h3>{attractionFound.location}</h3>
          <hr />
          <h3>{attractionFound.description}</h3>
          {/* <div className="movie-detail-cast-container">
            <h3 className="movie-detail-cast-title">Cast members</h3>
            <p>{movieFound.cast.join(", ")}</p>
          </div> */}
        </div>
        <div className="attraction-detail-poster-container">
          <img
            className="attraction-detail-poster"
            src={attractionFound.coverPicture}
            alt="cover picture"
          />
        </div>
      </div>
    </div>
  );
}
