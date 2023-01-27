import DeleteAttractionForm from "../../components/DeleteAttractionForm/DeleteAttractionForm"

export default function DeleteAttractionPage( {handleDeleteAttraction, attractions} ) {
    return (
        <main className="NewAttractionPage">
            <h1>Delete Attraction</h1>
            <DeleteAttractionForm handleDeleteAttraction={handleDeleteAttraction} attractions={attractions} />
        </main>
    )
}