import React from 'react'

export default function ModeButtons({ isEditing, editClick, saveClick, deleteClick }) {
    return isEditing ? (
        <>
            <button onClick={saveClick}
                className="button">Save</button>
        </>
    ) : (
        <>
            <button onClick={editClick}
                className="button">Edit</button>
            <button onClick={deleteClick}
                className="button-delete">Delete</button>
        </>
    )
}
