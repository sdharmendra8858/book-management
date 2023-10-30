const BookModel = require("./../db/book/book.model");

class BookUtility {
    constructor(){
        this.bookModel = new BookModel();
    }

    async createBook(book){
        console.log("----- In BookUtility createBook method -----");
        try{
            const data = await this.bookModel.create(book);
            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookUtility createBook method -----", err);
            return Promise.reject(err);
        }
    }

    async getAllBooks(){
        console.log("----- In BookUtility getAllBooks method -----");
        try{
            const data = await this.bookModel.findAll();
            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookUtility getAllBooks method -----", err);
            return Promise.reject(err);
        }
    }

    async getBook(id){
        console.log("----- In BookUtility getBook method -----");
        try{
            const data = await this.bookModel.findOne({_id: id}, {title: 1, author: 1, summary: 1});

            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookUtility getBook method -----", err);
            return Promise.reject(err);
        }
    }

    async updateBook(id, updateObj){
        console.log("----- In BookUtility updateBook method -----");
        try{

            const isUpdated = await this.bookModel.update({_id: id}, updateObj);
            let result;

            if(isUpdated.modifiedCount){
                result = await this.bookModel.findOne({_id: id}, {title: 1, summary: 1, author: 1});
            }

            return Promise.resolve(result);

        }catch(err){
            console.error("----- Error in BookUtility updateBook method -----", err);
            return Promise.reject(err);
        }
    }

    async deleteBook(id){
        console.log("----- In BookUtility deleteBook method -----");
        try{
            await this.bookModel.deleteBook({_id: id});

            return Promise.resolve({
                isDeleted: true
            });
        }catch(err){
            console.error("----- Error in BookUtility deleteBook method -----");
            return Promise.reject(err);
        }
    }
}

module.exports = BookUtility;