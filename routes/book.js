const express = require("express");

const BookService = require("../services/Book.service");

const routes = express.Router();

routes.post('/book', async (req, res, next) => {
    try{
        const bookService = new BookService();
        const response = await bookService.createBook(req.body);
        return res.send(response);
    }catch(err){
        console.log("----- Error in BookRoutes post /book route -----", err);
        next(err);
    }
});

routes.get('/book', async (req, res, next) => {
    try{
        const bookService = new BookService();
        const response = await bookService.getAllBooks();
        return res.send(response);
    }catch(err){
        console.log("----- Error in BookRoutes get /book route -----", err);
        next(err);
    }
});

routes.get('/book/:id', async (req, res, next) => {
    try{
        const bookId = req.params.id;

        const bookService = new BookService();
        const response = await bookService.getBook(bookId);
        
        return res.send(response);
    }catch(err){
        console.log("----- Error in BookRoutes get /book/id route -----", err);
        next(err);
    }
});

routes.patch('/book/:id', async (req, res, next) => {
    try{
        const bookId = req.params.id;
        const updateObj = req.body;

        const bookService = new BookService();
        const response = await bookService.updateBook(bookId, updateObj);
        
        return res.send(response);
    }catch(err){
        console.log("----- Error in BookRoutes patch /book/id route -----", err);
        next(err);
    }
});

routes.delete('/book/:id', async (req, res, next) => {
    try{
        const bookId = req.params.id;

        const bookService = new BookService();
        const response = await bookService.deleteBook(bookId);
        
        return res.send(response);
    }catch(err){
        console.log("----- Error in BookRoutes delete /book/id route -----", err);
        next(err);
    }
});

module.exports = routes