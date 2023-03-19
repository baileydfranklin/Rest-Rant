const router = require('express').Router()
const places = require('../models/places.js')

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdlbmVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }

    places.push(req.body)
    res.redirect('/places')
  })

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
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
    }]

    res.render('places/index', { places })
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
    res.render('places/show', { place: places[id] })
    }
  })
  

  module.exports = router