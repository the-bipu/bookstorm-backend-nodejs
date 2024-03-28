import mongoose, { mongo } from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        imgLink: {
            type: String,
            required: true,
        },
        driveLink: {
            type: String,
            required: true,
        },
        publishyear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Book = mongoose.model('Book', bookSchema);