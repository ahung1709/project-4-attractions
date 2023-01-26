import { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
// import "./NewSkillForm.css";

export default function NewEditAttractionForm({ handleAddAttraction, handleEditAttraction, newOrEdit, attractions }) {

  let { attractionId } = useParams();
  // console.log("attractionName:")
  // console.log(attractionName)
  const navigate = useNavigate()

  let attractionEdit = { name: "", coverPicture: "", description: "" }
  if (attractionId) {
    const attractionFound = attractions.find((attraction) => attraction._id === attractionId); 
    attractionEdit = { id: attractionId, name: attractionFound.name, coverPicture: attractionFound.coverPicture, description: attractionFound.description }
    // console.log(attractionEdit)
  } 

  // const attractionEdit = attractionFound ? { name: attractionFound.name, coverPicture: attractionFound.coverPicture, description: attractionFound.description } : { name: "", coverPicture: "", description: "" }
  // const [formData, setFormData] = useState({ name: "", coverPicture: attractionFound.coverPicture, description: "" });
  // const [formData, setFormData] = useState({ name: "", coverPicture: "", description: "" });
  const [formData, setFormData] = useState(attractionEdit);

  function handleChange(evt) {
    console.log(evt.target.value);
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
    console.log(formData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (newOrEdit === "new") {
      handleAddAttraction(formData);
      // addAttraction(formData);
      setFormData({ name: "", coverPicture: "", description: "" });
      navigate('/attractions/all')
    } else if ((newOrEdit === "edit")) {
      handleEditAttraction(formData);
      navigate('/attractions/all')
    }
  }

  let check = false

  return (
    <>
        {newOrEdit === "new" ? <h2>NewAttractionForm</h2> : <h2>EditAttractionForm</h2>}
        {/* <h3>{attractionFound.name}</h3> */}
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
        <label>Description</label>
        <input
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />

        {/* <label>Cover picture</label>
        <select
            name="coverPicture"
            value={formData.coverPicture}
            id="coverPicture"
            onChange={handleChange}
        >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select> */}
        <button type="submit">{(newOrEdit === "new") ? "ADD" : "UPDATE" } ATTRACTION</button>
        </form>
    </>
  );
}
