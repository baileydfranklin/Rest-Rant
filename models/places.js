// module.exports = [{
//     name: 'Another One Bites The Crust',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Italian',
//     pic: '/images/Photo3.avif'
// }, {
//     name: 'Excuse My French Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery, Breakfast',
//     pic: '/images/Photo4.avif'
// }]

const mongoose = require('mongoose')
const place_schema = new mongoose.Schema({

name: { type: String, required: true },
pic: String, 
cuisines: { type: String, required: true },
city: { type: String, required: 'Anytown' },
state: { type: String, required: 'USA' },
founded: Number
})

module.exports = mongoose.model('Place', place_schema)