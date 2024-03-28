import express from 'express';
import { CourseBook } from '../models/courseBookModels.js'

const router = express.Router();

// Route for posting books to the db
router.post('/addnew', async (request, response) => {
    try {
        if (!request.body.bookname)
        {
            return response.status(400).send({
                message: 'Send all required fields : title',
            });
        }
        if (!request.body.author)
        {
            return response.status(400).send({
                message: 'Send all required fields : author',
            });
        }
        if (!request.body.branch)
        {
            return response.status(400).send({
                message: 'Send all required fields : branch',
            });
        }
        if (!request.body.course)
        {
            return response.status(400).send({
                message: 'Send all required fields : course',
            });
        }
        if (!request.body.semester)
        {
            return response.status(400).send({
                message: 'Send all required fields : semester',
            });
        }
        if (!request.body.imgLink)
        {
            return response.status(400).send({
                message: 'Send all required fields : imgLink',
            });
        }

        const newBook = {
            bookname: request.body.bookname,
            author: request.body.author,
            branch: request.body.branch,
            course: request.body.course,
            semester: request.body.semester,
            imgLink: request.body.imgLink,
        };
        
        const book = await CourseBook.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for getting all books from the db
router.get('/all', async (request, response) => {
    try {
        const books = await CourseBook.find({});

        return response.status(200).json(
            {
                count: books.length,
                data: books
            }
        );
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for getting one book by id from db
router.get('/details/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await CourseBook.findById(id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for update a book
router.put('/update/:id', async (request, response) => {
    try {
        if (!request.body.bookname || !request.body.author || !request.body.branch || !request.body.course || !request.body.semester || !request.body.imgLink)
        {
            return response.status(400).send({
                message: 'Send all required fields : title, author, publishyear',
            });
        }

        const { id } = request.params;

        const result = await CourseBook.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({ message: "Book not found !"});
        }

        return response.status(200).send({ message: "Book updated succesfully !"});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for delete a book
router.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await CourseBook.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({ message: "Book not found !"});
        }

        return response.status(200).send({ message: "Book deleted succesfully !"});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;