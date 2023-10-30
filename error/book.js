module.exports = {
    "Not_Found": {
        "message": "The resource does not exist",
        "status": 404,
        "code": "NOT_FOUND"
    },
    "Bad_Request": {
        "message": "Bad request, try again",
        "status": 400,
        "code": "BAD_REQUEST"
    },
    "Book_Not_Found": {
        "message": "I suppose the book with this id is Ghosted. Try some other id.",
        "status": 404,
        "code": "BOOK_NOT_FOUND"
    },
    "Title_Required": {
        "message": "How a Book could be without a title? Please provide one.",
        "status": 400,
        "code": "TITLE_REQUIRED"
    },
    "Author_Required": {
        "message": "Is the Book written by Ghost? Even the ghost must have a name.",
        "status": 400,
        "code": "AUTHOR_REQUIRED"
    },
    "Summary_Required": {
        "message": "Help others in finding the correct book, by providing the summary.",
        "status": 400,
        "code": "SUMMARY_REQUIRED"
    }
}