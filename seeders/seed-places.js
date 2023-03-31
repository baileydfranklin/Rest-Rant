const db = require('../models')

db.Place.create ([{
        name: 'Another One Bites The Crust',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Italian',
        pic: '/images/Photo3.avif'
    }, {
        name: 'Excuse My French Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery, Breakfast',
        pic: '/images/Photo4.avif'
    }])

db.place_schema.create(place_seed_data)
    .then(() => {
        console.log('Success') 
        process.exit()
    })
    .catch((err) => { 
        console.log('Failed', err) 
        process.exit()
    })
