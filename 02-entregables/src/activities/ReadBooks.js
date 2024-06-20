export const isBookRead = (books, titleToSearch) => {
  let book = books.find((element) => element.title == titleToSearch);
  return book !== undefined ? book.isRead : false;
};
