// let PET_DATA = [
//     {
//         id: 1,
//         name: 'Arlo',
//         description: 'Loves to herd other dogs!',
//         imgUrl: '/img/IMG_6276.jpg'
//     },
//     {
//         id: 2,
//         name: 'Nico',
//         description: 'Eat, sleep, repeat',
//         imgUrl: '/img/IMG_6274.jpg'
//     },
//     {
//         id: 3,
//         name: 'Hazel',
//         description: 'Prefers to play with hoomans',
//         imgUrl: '/img/IMG_5024.jpg'
//     },
//     {
//         id: 4,
//         name: 'Luca',
//         description: 'Giant puppy with zero chill',
//         imgUrl: '/img/IMG_5208.jpg'
//     }
// ];

// let globalId = 5;

// const handlerFunctions = {
//     getPets: (req, res) => {
//         res.send(PET_DATA)
//     },

//     addPet: (req, res) => {
//         const { name, imgUrl, description } = req.body
//         const newObj = {
//             id: globalId,
//             name: name,
//             imgUrl: imgUrl,
//             description: description
//         }
//         PET_DATA.push(newObj)
//         globalId += 1
//         res.send(newObj)
//         // res.send(PET_DATA)
//     },

//     deletePet: (req, res) => {
//         const { id } = req.params
//         let filteredPet = PET_DATA.filter(pet => pet.id !== +id)
//         PET_DATA = filteredPet
//         // res.send('Pet deleted successfully');
//         res.send(filteredPet)
//     },


//     updatePet: (req, res) => {
//         const { id } = req.params
//         const { name, imgUrl, description } = req.body
//         // console.log(description)
//         // console.log(typeof(id))
//         // console.log(typeof (imgUrl))
//         // console.log(req.body)

//         const petToEdit = PET_DATA.find(element => element.id === +id);

//         // console.log(petToEdit)
//         petToEdit.name = name !== undefined ? name : petToEdit.name;
//         petToEdit.imgUrl = imgUrl !== undefined ? imgUrl : petToEdit.imgUrl;
//         petToEdit.description = description !== undefined ? description : petToEdit.description;

//         // console.log(petToEdit)
//         res.send(petToEdit);

//         // const petIndex = PET_DATA.findIndex(pet => pet.id === id)
//         // const petToEdit = PET_DATA[petIndex]

//         // if (name !== undefined) {
//         //     petToEdit.name = name
//         // }
//         // if (description !== undefined) {
//         //     petToEdit.description = description
//         // }
//         // if (imgUrl !== undefined) {
//         //     petToEdit.imgUrl = imgUrl
//         // }

//         // res.send(PET_DATA)
//         // res.send('Pet updated successfully');
//         // const petToEdit = PET_DATA.filter(element => element.id === id)
//         // petToEdit.description = description ?? petToEdit.description
//         // petToEdit.name = name ?? petToEdit.name
//         // petToEdit.imgUrl = imgUrl ?? petToEdit.imgUrl

//         // res.send(petToEdit)
//     }
// }

// export default handlerFunctions

