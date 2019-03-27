const express = require('express')
const router = express.Router()
const { SubCategory } = require('../models/subcategory')

//route to get subcatergory detials
router.get('/', (req, res) => {
    SubCategory.find()
        .then((subcatergories) => {
            res.send(subcatergories)
        })
        .catch((err) => {
            res.send(err)
        })
})

//route to add a subcatergory 
router.post('/', (req, res) => {
    const body = req.body
    const subcatergory = new SubCategory(body)
    console.log("im here")
    subcatergory.save()
        .then((subcatergory) => {
            if (subcatergory) {
                res.send(subcatergory)
            } else {
                res.send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
})


//route - to get a subcatergory by ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    SubCategory.findById({ _id: id })
        .then((subcatergory) => {
            if (subcatergory) {
                res.send(subcatergory)
            } else {
                res.send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
})

//route to edit a subcategory 
router.put('/:id', (req, res) => {
    const body = req.body
    const id = req.params.id
    SubCategory.findByIdAndUpdate({ _id: id }, body, { new: true })
        .then((subcategory) => {
            if (subcategory) {
                res.send(subcategory)
            } else {
                res.send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
})

//route - to delete a record by Id
router.delete('/:id', (req, res) => {
    const id = req.params.id
    SubCategory.findByIdAndDelete(id)
        .then((subcatergory) => {
            if (subcatergory) {
                res.send(subcatergory)
            } else {
                res.send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })

})

module.exports = { subcategoryRouter: router }