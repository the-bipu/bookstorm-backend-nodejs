import mongoose, { mongo } from "mongoose";

const courseBookSchema = mongoose.Schema(
    {
        bookname: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        branch: {
            type: String,
            required: true,
        },
        course: {
            type: String,
            required: true,
        },
        semester: {
            type: Number,
            required: true,
        },
        imgLink: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const CourseBook = mongoose.model('CourseBook', courseBookSchema);