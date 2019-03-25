const mongoose = require('mongoose')
const { Schema } = mongoose
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subCategory: {
        subCategory: Schema.Types.ObjectId,
        ref: SubCategory
    }
})
const Category = mongoose.model('Category', categorySchema)
module.exports = {
    Category
}