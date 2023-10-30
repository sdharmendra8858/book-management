const mongoose = require("mongoose");

const BookSchema = require("./book.schema");
const Error = require("./../../error");

class BookModel {
    constructor(){
        this.bookModel = new mongoose.model('books', BookSchema, 'books');
    }

    async create (object){
        console.log("----- In BookModel create method -----");
        try{
            const data = await this.bookModel.create(object);
    
            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookModel create method -----", err);
            return Promise.reject(new Error.Add_Book_Error());
        }
    }
    
    async findAll (filter = {}, proj = {}, option = {}){
        console.log("----- In BookModel find method -----");
        try{
            const data = await this.bookModel.find(filter, proj, option).lean();
    
            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookModel find method -----", err);
            return Promise.reject(new Error.Fetch_Error());
        }
    }
    
    async findOne (filter, proj = {}, option = {}){
        console.log("----- In BookModel findOne method -----");
        try{
            const data = await this.bookModel.findOne(filter, proj, option).lean();
    
            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookModel findOne method -----", err);
            return Promise.reject(new Error.Fetch_Error());
        }
    }
    
    async update (filter, updateObj){
        console.log("----- In BookModel update method -----");
        try{
            const data = await this.bookModel.updateOne(filter, updateObj);
    
            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookModel update method -----", err);
            return Promise.reject(new Error.Update_Error());
        }
    }
    
    async deleteBook (filter){
        console.log("----- In BookModel deleteBook method -----");
        try{
            const data = await this.bookModel.deleteOne(filter);
    
            return Promise.resolve(data);
        }catch(err){
            console.error("----- Error in BookModel deleteBook method -----", err);
            return Promise.reject(new Error.Delete_Error());
        }
    }

}



module.exports = BookModel