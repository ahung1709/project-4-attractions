// import { useParams } from "react-router-dom";
// import { getAllAttractions } from '../../utilities/attractions-api';

import NewEditAttractionForm from "../../components/NewEditAttractionForm/NewEditAttractionForm"

export default function EditAttractionPage( {handleEditAttraction, attractions} ) {
    
    // let { attractionName } = useParams();
    // console.log("attractionName:")
    // console.log(attractionName)

    return (
        <main className="NewAttractionPage">
            <h1>EditAttractionPage</h1>
            <NewEditAttractionForm handleEditAttraction={handleEditAttraction} newOrEdit="edit" attractions={attractions} />
        </main>
    )
}