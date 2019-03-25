const mongoose = require('mongoose')
const { Schema } = mongoose
const factorGridSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        category: Schema.Types.ObjectId,
        ref: Category
    },
    questions: {
        type: [String],
        required: true
    },
    options: {
        options: Schema.Types.ObjectId,
        ref: Option
    },
    factorRawTotal: {
        type: Number,
        required: true
    }
})
const FactorGrid = mongoose.model('FactorGrid', factorGridSchema)
module.exports = {
    FactorGrid
}