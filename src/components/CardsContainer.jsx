import CardHeader from "./CardHeader"
import Card from "./Card"
import { useState } from "react"
import axios from "axios"
import AddButton from "./AddButton"
import "./CardsContainer.css"


export default function CardsContainer({ initialCardList }) {

    const [currentList, setCurrentList] = useState(initialCardList)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post('/auth', { email, password });

            if (response.data.success) {
                setIsLoggedIn(true);
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            setIsLoggedIn(false);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const addCard = async () => {
        let { data } = await axios.post("/addPetCard", {
            name: "Pet's name",
            imgUrl: "insert url",
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
            <div className="card-header">
                <CardHeader
                    onLogin={handleLogin}
                    onLogout={handleLogout}
                    isLoggedIn={isLoggedIn} />
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

// className = "cards-header"