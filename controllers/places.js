const router = require('express').Router()
// const places = require('../models/places.js')
let db = require('../models')

// Same
router.get('/data/destroy', (req, res) => {
  db.place_schema.deleteMany()
    .then(() => { res.render('places/index', {}) })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

// Same
router.get('/new', (req, res) => {
  res.render('places/new')
})

// Some differences
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', { place })
  })
  .catch(err => {
    res.render('error404')
  })
})

// Same
router.get('/:id/comment', (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => { res.render('places/comment', { place }) })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

// Same
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  if (req.body.rant) {
    req.body.rant = true
  }else {
    req.body.rant = false
  }
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id)
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch((err) => {
          console.log(err)
          res.render('error404')
        })
    })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

// Some differences
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

// Some differences
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then((place) => {
    res.redirect(`/places`) 
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.delete('/:pid/comment/:cid', (req, res) => {
  db.Place.findById(req.params.pid)
    .then((place) => {
      db.Comment.findByIdAndDelete(req.params.cid)
        .then(() => {
          res.redirect(`/places/${req.params.pid}`) 
        })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// Some differences
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// Some differences
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

// Some differences
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('Places/new', { message })
      } else {
        res.render('error404')
      }
    })
})



  module.exports = router