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
			required: true,
		},
	},
	{
		timestamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true }
	}
)

module.exports = mongoose.model('Exercise', exerciseSchema)
