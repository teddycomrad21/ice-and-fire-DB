import React from 'react';
import { render } from '@testing-library/react';
import BooksSection from '../../../components/BooksSection/BooksSection';

describe('BooksSection', () => {
    it('should render correctly', () => {
        const { getByRole } = render(<BooksSection />);
        const textElement = getByRole('heading', { name: 'Books' });
        
        expect(textElement).toBeDefined();
    });
});