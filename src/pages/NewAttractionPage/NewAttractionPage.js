import NewEditAttractionForm from "../../components/NewEditAttractionForm/NewEditAttractionForm"

export default function NewAttractionPage( {handleAddAttraction} ) {
    return (
        <main className="NewAttractionPage">
            <h1>Create New Attraction</h1>
            <NewEditAttractionForm handleAddAttraction={handleAddAttraction} newOrEdit="new" />
        </main>
    )
}