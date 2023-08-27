import React from 'react'

export default function ModeButtons({ isEditing, editClick, saveClick, deleteClick }) {
    return isEditing ? (
        <>
            <button onClick={saveClick}>Save</button>
        </>
    ) : (
        <>
            <button onClick={editClick}>Edit</button>
            <button onClick={deleteClick}>Delete</button>
        </>
    )
}
