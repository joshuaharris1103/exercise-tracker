const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		day: {
			type: Number,
			required: true,
		},
		difficult: {
			type: Boolean,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true }
	}
)

exerciseSchema.virtual('diffLevel').get(function () {
	return `${this.name} is typically for ${this.type}`
})

module.exports = mongoose.model('Exercise', exerciseSchema)
