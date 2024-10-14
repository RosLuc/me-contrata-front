// FilterByType.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FilterByType } from '../index';
import { useFilter } from '../../../hooks/useFilter';
import { FilterType } from '../../../types/filter-types';
import '@testing-library/jest-dom';

jest.mock('../../../hooks/useFilter');

describe('FilterByType', () => {

  const mockSetType = jest.fn();

  beforeEach(() => {
    (useFilter as jest.Mock).mockReturnValue({
      type: FilterType.ALL,
      setType: mockSetType,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render filter options', () => {

    const { getByText } = render(<FilterByType />);

    expect(getByText('Todos os serviços')).toBeInTheDocument();
    expect(getByText('Programação')).toBeInTheDocument();
    expect(getByText('Design')).toBeInTheDocument();
  });

  it('should call setType with correct value when an option is clicked', () => {

    const { getByText } = render(<FilterByType />);

    fireEvent.click(getByText('Todos os serviços'));
    expect(mockSetType).toHaveBeenCalledWith(FilterType.ALL);

    fireEvent.click(getByText('Programação'));
    expect(mockSetType).toHaveBeenCalledWith(FilterType.PROGRAMMING);

    fireEvent.click(getByText('Design'));
    expect(mockSetType).toHaveBeenCalledWith(FilterType.DESIGN);
  });

  it('should apply selected class based on type', () => {

    (useFilter as jest.Mock).mockReturnValueOnce({
      type: FilterType.PROGRAMMING,
      setType: mockSetType,
    });

    const { getByText } = render(<FilterByType />);

    expect(getByText('Programação')).toHaveClass('selected');
    expect(getByText('Todos os serviços')).not.toHaveClass('selected');
    expect(getByText('Design')).not.toHaveClass('selected');
  });
});