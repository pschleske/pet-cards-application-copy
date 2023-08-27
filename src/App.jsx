import './App.css'
import CardsContainer from './components/CardsContainer'

function App({ initialData }) {

  return <CardsContainer
    className="main-container"
    initialCardList={initialData} />
}

export default App
