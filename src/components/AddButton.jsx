import react from "react";

export default function AddButton({ addClick }) {
    return (
        <button onClick={addClick}
            className="add-button">Add</button>
    )
}