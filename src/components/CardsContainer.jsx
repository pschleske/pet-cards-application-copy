import CardHeader from "./CardHeader"
import Card from "./Card"
import { useState } from "react"
import axios from "axios"
import AddButton from "./AddButton"


export default function CardsContainer({ initialCardList }) {

    const [currentList, setCurrentList] = useState(initialCardList)

    const addCard = async () => {
        let { data } = await axios.post("/addPetCard", {
            name: "",
            imgUrl: "Enter your image url",
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
            <Card
                key={id}
                id={id}
                initialCardData={{ nama: name, imgUrl: imgUrl, description }}
                initialIsEditing={false}
                deleteFunc={() => deleteCard(id)}
            />
        )
    })

    return (
        <div>
            <div>
                <CardHeader />
            </div>
            <div>
                {cards}
                {/* <Card /> */}
            </div>
            <AddButton addClick={addCard} />
        </div>
    )
}
