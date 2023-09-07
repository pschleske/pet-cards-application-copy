import { User, Pet, db } from '../src/model.js';
import userData from './data/users.json' assert { type: 'json' };
import petData from './data/pets.json' assert { type: 'json' };

console.log('Syncing database...');

await db.sync({ force: true })

console.log('Seeding database...')

const usersInDB = await Promise.all(
    userData.map(async (user) => {
        return await User.create({
            email: user.email,
            password: user.password
        })
    })
)

const userIds = await Promise.all(usersInDB.map((user) => user.userId));
// await Promise.all(usersInDB)

const pets = await Promise.all(
    petData.map(async (pet, index) => {
        const userId = userIds[index];

        return await Pet.create({
            userId: userId,
            name: pet.name,
            imgUrl: pet.imgUrl,
            description: pet.description
        })
        // return createdPet;
    })
)
// const pets = petData.map(async (pet) => {
//     const user = await User.findByPk(pet.userId);

//     const createdPet = await Pet.create({
//         // userId: user.userId,
//         name: pet.name,
//         imgUrl: pet.imgUrl,
//         description: pet.description
//     })
//     await user.addPet(createdPet);
//     return createdPet
// })

// await Promise.all(pets)

await db.close()