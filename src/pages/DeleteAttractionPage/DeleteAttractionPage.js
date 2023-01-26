// import { useParams } from "react-router-dom";
// import { getAllAttractions } from '../../utilities/attractions-api';

// import NewEditAttractionForm from "../../components/NewEditAttractionForm/NewEditAttractionForm"
import DeleteAttractionForm from "../../components/DeleteAttractionForm/DeleteAttractionForm"

export default function DeleteAttractionPage( {handleDeleteAttraction, attractions} ) {
    
    // let { attractionName } = useParams();
    // console.log("attractionName:")
    // console.log(attractionName)

    return (
        <main className="NewAttractionPage">
            <h1>DeleteAttractionPage</h1>
            <DeleteAttractionForm handleDeleteAttraction={handleDeleteAttraction} attractions={attractions} />
            {/* <NewEditAttractionForm handleEditAttraction={handleEditAttraction} newOrEdit="edit" attractions={attractions} /> */}
        </main>
    )
}