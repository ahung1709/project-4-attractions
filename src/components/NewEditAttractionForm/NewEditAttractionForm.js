import { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

export default function NewEditAttractionForm({ handleAddAttraction, handleEditAttraction, newOrEdit, attractions }) {

  let { attractionId } = useParams();
  const navigate = useNavigate()

  let attractionEdit = { name: "", coverPicture: "", location: "", description: "" }
  if (attractionId) {
    const attractionFound = attractions.find((attraction) => attraction._id === attractionId); 
    attractionEdit = { 
      id: attractionId, 
      name: attractionFound.name, 
      coverPicture: attractionFound.coverPicture, 
      location: attractionFound.location, 
      description: attractionFound.description 
    }
  } 

  const [formData, setFormData] = useState(attractionEdit);

  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (newOrEdit === "new") {
      handleAddAttraction(formData);
      setFormData({ name: "", coverPicture: "", location: "", description: "" });
      navigate('/attractions/all')
    } else if ((newOrEdit === "edit")) {
      handleEditAttraction(formData);
      navigate('/attractions/all')
    }
  }

  return (
    <>
        <form className="NewAttractionForm" onSubmit={handleSubmit}>
        <label>Attraction name</label>
        <input
            id="attraction"
            name="name"
            value={formData.name}
            onChange={handleChange}
        />
        <label>Cover picture</label>
        <input
            id="coverPicture"
            name="coverPicture"
            value={formData.coverPicture}
            onChange={handleChange}
        />
        <label>Location</label>
        <input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
        />
        <label>Description</label>
        <input
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />
        <button type="submit">{(newOrEdit === "new") ? "ADD" : "UPDATE" } ATTRACTION</button>
        </form>
    </>
  );
}
