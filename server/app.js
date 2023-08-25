import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();

const port = 8000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());

//set up routes here:
const { getPets, addPet, deletePet, updatePet } = handlerFunctions

app.get('/petCards', getPets)

app.post('/addPet', addPet)

app.delete('/removePet', deletePet)

app.put('/editPet/:id', updatePet)


ViteExpress.listen(app, port, () => console.log(`Listening on port ${port}. Go to http://localhost:${port}`))