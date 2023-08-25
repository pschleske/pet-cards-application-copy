let PET_DATA = [
    {
        petId: 1,
        name: 'Arlo',
        description: 'Loves to herd other dogs!',
        imgUrl: '/public/img/'
    },
    {
        petId: 2,
        name: 'Paul',
        description: 'Aussie Poodle mix',
        imgUrl: '/public/img/'
    },
    {
        petId: 3,
        name: 'Hazel',
        description: '',
        imgUrl: '/public/img/'
    },
    {
        petId: 4,
        name: 'Luca',
        description: 'Giant puppy with zero chill',
        imgUrl: '/public/img/'
    }
];

let globalId = 5;

const handlerFunctions = {
    getPets: (req, res) => {
        res.send(PET_DATA)
    },

    addPet: (req, res) => { },

    deletePet: (req, res) => { },

    updatePet: (req, res) => { }
}

export default handlerFunctions

