const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
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

module.exports = router
