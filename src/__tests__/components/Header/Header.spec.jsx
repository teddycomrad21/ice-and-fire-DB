import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header/Header';

jest.mock('../../../components/HeaderInfo/HeaderInfo', () => ({
  __esModule: true,
  default: () => (<div>headerInfo</div>)
}));

jest.mock('../../../components/RandomCharacter/RandomCharacter', () => ({
  __esModule: true,
  default: () => (<div>randomCharacter</div>)
}));

describe('Header component', () => {
  it('should render Header Info and Random Character components', () => {
    render(<Header />);

    expect(screen.getByText('headerInfo')).toBeDefined();
    expect(screen.getByText('randomCharacter')).toBeDefined();
  });
});

