const { faker } = require('@faker-js/faker');
const User = require('./../model/User.model');
const connectDatabase = require('../db/connectDatabase');

async function createFakeUsers ( count = 100 ){
    let users = [] ;

    for(let i=0;i<count;i++){
        
        const gender = Math.random() > 0.5 ? 'male' : 'female';
        const firstName = faker.name.firstName(gender);
        const lastName = faker.name.lastName(gender);

        const user = {
            name :  firstName + " " + lastName ,
            gender,
            email : faker.internet.email((firstName , lastName ))  ,
            password : faker.internet.password(),
            image : faker.internet.avatar(gender),

        }

        users.push(user);
    }

    await User.create(users);
    
}

connectDatabase().then(() => createFakeUsers(10));