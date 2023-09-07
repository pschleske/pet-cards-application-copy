import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
// import handlerFunctions from './controller.js';
import session from 'express-session';
import { User, Pet } from '../src/model.js'

const app = express();

const port = 8000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.use(session({ secret: 'shhhhhh', saveUninitialized: true, resave: false }))

function isLoggedIn(req) {
    return req.session.userId !== undefined;
}

function requireLogin(req, res, next) {
    if (!isLoggedIn(req)) {
        return res.status(401).json({ error: 'Unauthorized' })
    }
    next()
}

//set up routes here:
app.get('/petCards', async (req, res) => {
    const allPets = await Pet.findAll();
    res.json(allPets)
})

app.post('/auth', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: { email: email }
    });

    if (user && user.password === password) {
        req.session.userId = user.userId;
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }
})

app.post('/logout', (req, res) => {
    if (!req.session.userId) {
        res.status(401).json({ error: 'Unauthorized' });
    } else {
        req.session.destroy();
        res.json({ success: true })
    }
})

app.post('/addPetCard', requireLogin, async (req, res) => {
    try {
        const { name, imgUrl, description } = req.body;
        // const userId = req.session.userId;
        const { userId } = req.session;

        const newPetCard = await Pet.create({
            name,
            imgUrl,
            description,
            userId
        });
        res.status(201).json(newPetCard);
    } catch (error) {
        console.error('Error adding pet card', error);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

app.delete('removePetCard/:id', requireLogin, async (req, res) => {
    try {
        const { id } = req.params;
        // const userId = req.session.userId;
        const { userId } = req.session;

        const deletedPetCard = await Pet.destroy({
            where: {
                petId: id,
            },
        });
        if (deletedPetCard) {
            res.status(200).json({ success: true, message: 'Pet Deleted Successfully!' })
        } else {
            res.status(404).json({ success: false, message: 'Pet not found' })
        }
    } catch (error) {
        console.error('Error deleting pet:', error)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
});

app.put('/editPetCard/:id', requireLogin, async (req, res) => {
    try {
        // const userId = req.session.userId;
        const { userId } = req.session;
        const { id } = req.params;
        const { name, imgUrl, description } = req.body

        const [updatedRowsCount] = await Pet.update({
            name,
            imgUrl,
            description,
        },
            {
                where: {
                    petId: id,
                },
            }
        );
        if (updatedRowsCount === 0) {
            res.status(404).json({ success: false, message: 'Pet not found' })
        } else {
            const updatePetCard = await Pet.findByPk(id);
            res.status(200).json({ success: true, updatePetCard })
        }
    } catch (error) {
        console.error('Error updating pet:', error)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
})
// const { getPets, addPet, deletePet, updatePet } = handlerFunctions

// app.get('/petCards', getPets)

// app.post('/addPetCard', addPet)

// app.delete('/removePetCard/:id', deletePet)

// app.put('/editPetCard/:id', updatePet)


ViteExpress.listen(app, port, () => console.log(`Listening on port ${port}. Go to http://localhost:${port}`))