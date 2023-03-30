const db = require('../models')

const place_seed_data = [
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai_food.avif',
        founded: 1989
    },
    {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding_cafe.avif',
        founded: 2020
    }
]

db.place_schema.create(place_seed_data)
    .then(() => {
        console.log('Success') 
        process.exit()
    })
    .catch((err) => { 
        console.log('Failed', err) 
        process.exit()
    })
