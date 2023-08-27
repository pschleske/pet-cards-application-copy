import React from 'react'

export default function Description({ isEditing, value, onValueChange }) {
    return isEditing ? (
        <input
            type="text"
            value={value}
            onChange={(event) => {
                onValueChange(event.target.value)
            }} />
    ) : (
        <span>
            {value}
        </span>
    )
}
