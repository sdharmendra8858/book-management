const { isEmpty } = require("lodash");

const BookUtility = require("./Book.utility");
const Error = require("./../error");

class BookService {
    constructor(){
        this.bookUtility = new BookUtility();
    }

    async createBook(book){
        console.log("----- In BookService createBook method -----");
        try{

            if(isEmpty(book.title)){
                throw new Error.Title_Required();
            }
            if(isEmpty(book.author)){
                throw new Error.Author_Required();
            }

            if(isEmpty(book.summary)){
                throw new Error.Summary_Required();
            }

            const data = await this.bookUtility.createBook(book);
            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookService method -----", err);
            return Promise.reject(err);
        }
    }

    async getAllBooks(){
        console.log("----- In BookService getAllBooks method -----");
        try{
            const data = await this.bookUtility.getAllBooks();

            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookService getAllBooks method -----", err);
            return Promise.reject(err);
        }
    }

    async getBook(bookId){
        console.log("----- In BookService getBook method -----");
        try{
            const bookDetail = await this.bookUtility.getBook(bookId);
            if(isEmpty(bookDetail)){

                throw new Error.Book_Not_Found();
            }

            return Promise.resolve(bookDetail);
        }catch(err){
            console.error("----- Error in BookService getBook method -----", err);
            return Promise.reject(err);
        }
    }

    async updateBook(bookId, updateObj){
        console.log("----- In BookService updateBook method -----");
        try{
            const book = await this.bookUtility.getBook(bookId);
            if(isEmpty(book)){
                throw new Error.Book_Not_Found();
            }

            const updated = await this.bookUtility.updateBook(bookId, updateObj);

            return Promise.resolve(updated);
            
        }catch(err){
            console.error("----- Error in BookService updateBook method -----", err);
            return Promise.reject(err);
        }
    }

    async deleteBook(bookId){
        console.log("----- In BookService deleteBook method -----");
        try{
            const book = await this.bookUtility.getBook(bookId);
            if(isEmpty(book)){
                throw new Error.Book_Not_Found();
            }

            const data = await this.bookUtility.deleteBook(bookId);

            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookService deleteBook method -----", err);
            return Promise.reject(err);
        }
    }
}

module.exports = BookService