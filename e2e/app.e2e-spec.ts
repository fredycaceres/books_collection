import { BooksCollectionPage } from './app.po';

describe('books-collection App', function() {
  let page: BooksCollectionPage;

  beforeEach(() => {
    page = new BooksCollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
