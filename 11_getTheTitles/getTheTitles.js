
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(books) {
    const titles = books.map(book => book.title);
        return titles;
};

// const test = getTheTitles(books);
// console.log(test);


// Do not edit below this line
module.exports = getTheTitles;
