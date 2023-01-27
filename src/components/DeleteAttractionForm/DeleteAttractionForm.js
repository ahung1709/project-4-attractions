import { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

export default function DeleteAttractionForm({ handleDeleteAttraction, attractions }) {

  let { attractionId } = useParams();
  const navigate = useNavigate()

  const attractionFound = attractions.find((attraction) => attraction._id === attractionId); 
  let attractionDelete = { id: attractionId, name: attractionFound.name, coverPicture: attractionFound.coverPicture, description: attractionFound.description }

  const [formData, setFormData] = useState(attractionDelete);

  function handleSubmit(evt) {
    evt.preventDefault();    
    handleDeleteAttraction(formData);
    navigate('/attractions/all')
  }

  return (
    <>
        <h2>Are you sure you want to delete this attraction?</h2>
        <form className="DeleteAttractionForm" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <th>Name </th>
                        <td>{attractionFound.name}</td>
                    </tr>
                    <tr>
                        <th>Cover picture </th>
                        <td>{attractionFound.coverPicture}</td>
                    </tr>
                    <tr>
                        <th>Description </th>
                        <td>{attractionFound.description}</td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">DELETE ATTRACTION</button>
        </form>
    </>
  );
}
