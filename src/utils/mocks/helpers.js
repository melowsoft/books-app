// Mock for '../../api/helpers'
 export const getId = async (id) => {
    if (id === '123') {
      return {
        title: 'Sample Book',
        authors: ['Author 1', 'Author 2'],
        publishedDate: '2022-10-01',
        publisher: 'Sample Publisher',
        pageCount: 200,
        description: 'Sample book description',
        imageLinks: { large: 'sample.jpg' },
      };
    } else {
      // Handle other cases or errors
      throw new Error('Book not found');
    }
  };
  
  