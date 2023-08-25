export const extractIdFromUrls = (urls) => urls.map(url => url.split('/').pop()).filter(part => !isNaN(part));  // return book id from url

export const processArraySequentially = async (arr, serviceQuery) => {
    const asyncOperations = arr.map(async id => {
        return serviceQuery.getBook(id);
    });
  
    return Promise.all(asyncOperations);
};

export const mergeBooksWithCharacters = (staticBooks, characterBooks) =>
  staticBooks.map(staticBook => {
    const matchingBook = characterBooks.find(
      bookWithChar => bookWithChar.id === staticBook.id
    );

    return matchingBook
      ? { ...staticBook, checked: true }
      : { ...staticBook, checked: false };
});