// import { getAllAttractions } from '../../utilities/attractions-api';

import NewEditAttractionForm from "../../components/NewEditAttractionForm/NewEditAttractionForm"

export default function NewAttractionPage( {handleAddAttraction} ) {

    return (
        <main className="NewAttractionPage">
            <h1>NewAttractionPage</h1>
            <NewEditAttractionForm handleAddAttraction={handleAddAttraction} newOrEdit="new" />
        </main>
    )
}