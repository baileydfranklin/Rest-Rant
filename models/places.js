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
    pic: { type: String, default: 'http://placekitten.com/350/350' },
    cuisines: { type: String, required: true },
    city: { type: String, required: 'Anytown' },
    state: { type: String, required: 'USA' },
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

place_schema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', place_schema)