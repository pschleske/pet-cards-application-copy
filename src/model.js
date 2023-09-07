import { Model, DataTypes } from 'sequelize';
import connectToDB from './db.js';
import util from 'util';

export const db = await connectToDB('postgresql:///petcards')
// I have to create the petcards database

export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        modelName: 'user',
        sequelize: db,
    }
);

export class Pet extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Pet.init(
    {
        petId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        modelName: 'pet',
        sequelize: db,
    }
);

User.hasMany(Pet, { foreignKey: 'userId' })
// creates User.getAnimals() and User.addAnimal()
Pet.belongsTo(User, { foreignKey: 'userId' })
// creates Pet.getUser() and Pet.setUser()