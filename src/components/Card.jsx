import React from 'react'
import ModeButtons from "./ModeButtons"
import Description from "./Description"
import CardImage from "./CardImage"
import CardName from "./CardName"
import { useState } from 'react'
import axios from 'axios'

export default function Card({ initialCardData, initialIsEditing, deleteFunc, id }) {

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [name, setName] = useState(initialCardData.name)
    const [img, setImage] = useState(initialCardData.imgUrl)
    const [description, setDescription] = useState(initialCardData.description)

    const changeEditMode = () => setEditMode(true)

    const changeNormalMode = async () => {
        let bodyObject = {
            name,
            img,
            description
        }
        const { data } = await axios.put(`/editPetCard/${id}`, bodyObject)

        if (!data.error) {
            setEditMode(false)
        } else {
            alert('Something went wrong, try again!')
        }
    }

    return (
        <>
            {/* <h2>name</h2> */}
            < CardName
                isEditing={editMode}
                value={name}
                onValueChange={setName}
            />
            {/* <img src="" alt="" /> */}
            < CardImage
                isEditing={editMode}
                value={img}
                onValueChange={setImage}
            />
            {/* <p>description</p> */}
            < Description
                isEditing={editMode}
                value={description}
                onValueChange={setDescription}
            />
            {/* <button>Save</button>
                <button>Edit</button>
                <button>Delete</button> */}
            < ModeButtons
                isEditing={editMode}
                saveClick={changeNormalMode}
                editClick={changeEditMode}
                deleteClick={deleteFunc}
            />
        </>
    )
}
