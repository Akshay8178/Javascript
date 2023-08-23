// You are given a dataset containing information about books in a library. Your task is to write JavaScript functions using higher-order functions to perform various operations on this dataset. The dataset is provided in the form of an array of objects, where each object represents a book.

const library = [
    { 
title: "The Great Gatsby", 
author: "F. Scott Fitzgerald", 
year: 1925,
   pages: 180 
},
    {
title: "To Kill a Mockingbird",
author: "Harper Lee", 
year: 1960, 
pages: 281
},
    {
title: "1984", 
author: "George Orwell", 
year: 1949, 
pages: 328 
},
    {
title: "Pride and Prejudice", 
author: "Jane Austen", 
year: 1813,
pages: 432 
},
{
    title: "alchemist", 
    author: "Jane Austen", 
    year: 1813,
    pages: 432 
    } ]
// Total Number of Pages: Write a function getTotalPages that calculates and returns the total number of pages in the library
const getTotalPages = library.map((num) => num.pages).reduce(function(page1,page2){
    return page1 + page2 ;
});
console.log( "the number of total pages in the library are" + " " + getTotalPages);    

// List of Book Titles: Write a function getBookTitles that returns an array containing only the titles of the books in the library.

const getBookTitles = library.map(alltitle => alltitle.title);
console.log(getBookTitles);  

// Books Published After a Given Year: Write a function --getBooksPublishedAfterYear(year)-- that takes a year as a parameter and returns an array containing the titles of books published after that year.

function getBooksPublishedAfterYear(year){
    return library.filter(book => book.year > year).map(book => book.title);
}

const booksPublishedAfterYear = getBooksPublishedAfterYear(1930);
console.log(booksPublishedAfterYear);

// Average Number of Pages: Write a function getAveragePages that calculates and returns the average number of pages across all books in the library.
const Array1 = library.map((p) => p.pages);
console.log(Array1);
let arraylength = Array1.length;

const getAveragePages = getTotalPages / arraylength;
console.log(getAveragePages);

// Longest Book: Write a function getLongestBook that returns the title of the book with the most pages.

const getTotalPagesarr = library.map((num) => num.pages);
console.log(Math.max(...getTotalPagesarr));

// Authors and Their Books: Write a function getAuthorsAndBooks that returns an object where the keys are author names and the values are arrays of book titles written by each author.

function getAuthorsAndBooks(library){
    const authorandbooks = {};

    library.reduce((acc,book) => {
        if(!acc[book.author]){
            acc[book.author] = [];
        }
        acc[book.author].push(book.title);
        return acc;
    }, authorandbooks)

    return authorandbooks;

} 
const authorsAndBooks = getAuthorsAndBooks(library);
console.log(authorsAndBooks);

// Total Number of Pages by Author: Write a function getTotalPagesByAuthor that returns an object where the keys are author names and the values are the total number of pages of books written by each author.

function getTotalPagesByAuthor(library) {
    const totalPagesByAuthor = {};
    for (const book of library) {
        const author = book.author;
        const pages = book.pages;
        if (totalPagesByAuthor[author]) {
            totalPagesByAuthor[author] += pages;
        } else {
            totalPagesByAuthor[author] = pages;
        }
    }
    return totalPagesByAuthor;
}
const totalPagesByAuthor = getTotalPagesByAuthor(library);
console.log(totalPagesByAuthor);


// Advanced: Filter and Map: Write a function getShortestBookByAuthor that returns an object where the keys are author names and the values are the titles of the shortest book written by each author.

function getShortestBookByAuthor(library) {
    const shortestBookByAuthor = {};
    for (const book of library) {
        const author = book.author;
        const title = book.title;
        const pages = book.pages;
        if (!shortestBookByAuthor[author] || pages < shortestBookByAuthor[author].pages) {
            shortestBookByAuthor[author] = { title, pages };
        }
    }
    const result = {};
    for (const author in shortestBookByAuthor) {
        result[author] = shortestBookByAuthor[author].title;
    }
    return result;
}
const shortestBookByAuthor = getShortestBookByAuthor(library);
console.log(shortestBookByAuthor);



