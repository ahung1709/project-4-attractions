import NewEditAttractionForm from "../../components/NewEditAttractionForm/NewEditAttractionForm"

export default function EditAttractionPage( {handleEditAttraction, attractions} ) {
    return (
        <main className="NewAttractionPage">
            <h1>Edit Attraction</h1>
            <NewEditAttractionForm handleEditAttraction={handleEditAttraction} newOrEdit="edit" attractions={attractions} />
        </main>
    )
}