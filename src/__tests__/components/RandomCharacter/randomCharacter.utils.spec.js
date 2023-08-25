import {
    extractIdFromUrls,
    processArraySequentially,
    mergeBooksWithCharacters
} from '../../../components/RandomCharacter/randomCharacter.utils';
import {
    mockBook, mockBooks,
    mockCharBook, mockStaticBooks
} from './mockData';

describe('extractIdFromUrls function', () => {
    it('should return array of id\'s of the books from the array of urls', () => {
        expect(extractIdFromUrls(mockBook)).toStrictEqual(['8']);
        expect(extractIdFromUrls(mockBooks)).toStrictEqual(['1', '3']);
    });
});

describe('processArraySequentially', () => {
    it('should process array sequentially', async () => {
        const mockGetBook = jest.fn().mockResolvedValue('result');

        const gotServiceInstance = {
            getBook: mockGetBook
        };
  
        const ids = ['1', '3', '4'];
        const expectedResults = ['result', 'result', 'result'];

        const results = await processArraySequentially(ids, gotServiceInstance);

        expect(results).toEqual(expectedResults);
        expect(mockGetBook).toHaveBeenCalledTimes(ids.length);
        expect(mockGetBook).toHaveBeenCalledWith('1');
        expect(mockGetBook).toHaveBeenCalledWith('3');
        expect(mockGetBook).toHaveBeenCalledWith('4');
    });
});

describe('mergeBooksWithCharacters function', () => {
    it('should add \'checked\' key to the existing book', () => {
        expect(mergeBooksWithCharacters(mockStaticBooks, mockCharBook)[0]).toHaveProperty('checked', true);
    });
});