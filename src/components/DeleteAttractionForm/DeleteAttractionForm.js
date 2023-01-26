import { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
// import "./NewSkillForm.css";

export default function DeleteAttractionForm({ handleDeleteAttraction, attractions }) {

  let { attractionId } = useParams();
  // console.log("attractionName:")
  // console.log(attractionName)
  const navigate = useNavigate()

//   let attractionDelete = { name: "", coverPicture: "", description: "" }
//   if (attractionId) {
    const attractionFound = attractions.find((attraction) => attraction._id === attractionId); 
    let attractionDelete = { id: attractionId, name: attractionFound.name, coverPicture: attractionFound.coverPicture, description: attractionFound.description }
    // console.log(attractionEdit)
//   } 

  // const attractionEdit = attractionFound ? { name: attractionFound.name, coverPicture: attractionFound.coverPicture, description: attractionFound.description } : { name: "", coverPicture: "", description: "" }
  // const [formData, setFormData] = useState({ name: "", coverPicture: attractionFound.coverPicture, description: "" });
  // const [formData, setFormData] = useState({ name: "", coverPicture: "", description: "" });
  const [formData, setFormData] = useState(attractionDelete);

//   function handleChange(evt) {
//     console.log(evt.target.value);
//     const newFormData = { ...formData, [evt.target.name]: evt.target.value };
//     setFormData(newFormData);
//     console.log(formData);
//   }

  function handleSubmit(evt) {
    evt.preventDefault();
    // if (newOrEdit === "new") {
    
      handleDeleteAttraction(formData);

      // addAttraction(formData);
    //   setFormData({ name: "", coverPicture: "", description: "" });
    // } else if ((newOrEdit === "edit")) {
    //   handleEditAttraction(formData);

    // }
    navigate('/attractions/all')
  }

//   let check = false

  return (
    <>
        <h2>DeleteAttractionForm</h2>
        <h2>Are you sure you want to delete this attraction?</h2>
        {/* <h3>{attractionFound.name}</h3> */}
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

        {/* <label>Attraction name</label>
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
        /> */}

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
        <button type="submit">DELETE ATTRACTION</button>
        </form>
    </>
  );
}
