const express = require('express')
const PassQuire = require('../models/passQuireSchema') //import the schema and model file

const router = express.Router()




router.get('/', (req, res) => {
    // display list
    PassQuire.find()   //.sort({ createdAt: -1 }) 
    .then((result) => {
        res.render('index', { title: 'All List', listItems: result })
    })
    .catch((err) => { console.log(err) })

})

router.post('/', (req, res) => { //--> save route
    //create a new instance of Contact and pass the req.body
    const passQuire = new PassQuire(req.body);

    passQuire.save()
        .then(() => {
            //redirect to app.get('/contacts) for rendering
            res.redirect('/indexList')
        })
        .catch((err) => { console.log(err) })

})

//ADD to the list
router.get('/addList', (req, res) => {

    res.render('addEntry', { title: 'Add Another Entry'})

})

//extract the request parameter with (:)
router.get('/:id', (req, res) => {
    //extract the params
    const id = req.params.id;
    //console.log(id);

    PassQuire.findById(id)
    .then((result) => {
        res.render('infoDisplay', { listItems: result, title: '' })
    })
    .catch((err) => { console.log(err) })
})

//pass to editFone.ejs for updating. Extract the request parameter with (:)
router.get('/update/:id', (req, res) => {
    //extract the params
    const id = req.params.id;
    //console.log(id);

    PassQuire.findById(id)
    .then((result) => {
        res.render('editInfo', { listItems: result, title: '' })
    })
    .catch((err) => { console.log(err) })
})

//save the updates and redirect to index page
router.post('/update/:id', (req, res) => {
    //extract the params
    const id = req.params.id;
    
    PassQuire.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .then(() => {
        //redirect to app.get('/contacts) for rendering
        res.redirect('/indexList')
    })
    .catch((err) => { console.log(err) })
})

//delete handler
router.delete('/:id', (req, res) => {
    
    const id = req.params.id;

    PassQuire.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/indexList' })
    })
    .catch((err) => { console.log(err) })

})

module.exports = router;