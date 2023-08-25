import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import handlerFunctions from './controller.js';

const app = express();

const port = 8000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());

//set up routes here:
const { getPets, addPet, deletePet, updatePet } = handlerFunctions

app.get('/petCards', getPets)

app.post('/addPetCard', addPet)

app.delete('/removePetCard/:id', deletePet)

app.put('/editPetCard/:id', updatePet)


ViteExpress.listen(app, port, () => console.log(`Listening on port ${port}. Go to http://localhost:${port}`))