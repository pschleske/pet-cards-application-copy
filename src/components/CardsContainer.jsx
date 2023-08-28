import CardHeader from "./CardHeader"
import Card from "./Card"
import { useState } from "react"
import axios from "axios"
import AddButton from "./AddButton"
import "./CardsContainer.css"


export default function CardsContainer({ initialCardList }) {

    const [currentList, setCurrentList] = useState(initialCardList)

    const addCard = async () => {
        let { data } = await axios.post("/addPetCard", {
            name: "Pet's name here",
            imgUrl: "",
            description: "Type here!"
        })

        setCurrentList([...currentList, data])
    }

    const deleteCard = async (id) => {
        const { data } = await axios.delete(`/removePetCard/${id}`)

        if (!data.error) {
            const filteredList = currentList.filter(element => element.id !== id)
            setCurrentList(filteredList)
        }
    }

    const cards = currentList.map((cardItem) => {
        const { id, name, imgUrl, description } = cardItem

        return (
            <div className="card" key={id}>
                <Card
                    // key={id}
                    id={id}
                    initialCardData={{ name, imgUrl, description }}
                    initialIsEditing={false}
                    deleteFunc={() => deleteCard(id)}
                />
            </div>
        )
    })

    return (
        <div className="cards-container">
            <div className="cards-header">
                <CardHeader />
            </div>
            <div className="card-list">

                {cards}

                {/* <Card /> */}
            </div>
            <AddButton
                addClick={addCard}
            />
        </div>
    )
}
