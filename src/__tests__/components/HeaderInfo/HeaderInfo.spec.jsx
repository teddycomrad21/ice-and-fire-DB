import React from 'react';
import { render } from '@testing-library/react';
import HeaderInfo from '../../../components/HeaderInfo/HeaderInfo';

describe('HeaderInfo', () => {
    it('should render correctly', () => {
        const { getByRole } = render(<HeaderInfo />);
        const textElement = getByRole('heading', { name: 'Game Of Thrones DB' });
        
        expect(textElement).toBeDefined();
    });
});