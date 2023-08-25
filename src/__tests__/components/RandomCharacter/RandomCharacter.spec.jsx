import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; 
import RandomCharacter from '../../../components/RandomCharacter/RandomCharacter';
import GotService from '../../../services/gotService';

const mockCharacter = {
    "id": "44",
    "name": "Aegon Targaryen",
    "gender": "Male",
    "born": "no data :(",
    "died": "no data :(",
    "culture": "Valyrian",
    "books": [
        "https://www.anapioficeandfire.com/api/books/11"
    ]
};

jest.mock('../../../services/gotService');

describe('RandomCharacter', () => {
    it('should call getCharacter and getAllBooks methods on mount', async () => {
        const mockGetCharacter = jest.fn().mockResolvedValue(mockCharacter);
        const mockGetAllBooks = jest.fn().mockResolvedValue([]);

        GotService.mockImplementation(() => {

            return {
                getCharacter: mockGetCharacter,
                getAllBooks: mockGetAllBooks
            };
        });

        await act(async () => {
            render(<RandomCharacter />);
        });

        expect(mockGetCharacter).toHaveBeenCalledTimes(2);
        expect(mockGetAllBooks).toHaveBeenCalledTimes(1);
    });
});

describe('RandomCharacter', () => {
    it('displays error message on failed request', async () => {
        const mockGetCharacter = jest.fn().mockRejectedValue(new Error('Request failed'));
        const mockGetAllBooks = jest.fn().mockResolvedValue([]);

        GotService.mockImplementation(() => {

            return {
                getCharacter: mockGetCharacter,
                getAllBooks: mockGetAllBooks
            };
        });

        let getByText;

        await act(async () => {
            ({ getByText } = render(<RandomCharacter />));
        });

        const errorMessage = getByText(/Something goes wrong/);
        expect(errorMessage).toBeTruthy();
    });
});