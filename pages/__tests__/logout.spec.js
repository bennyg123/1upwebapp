import React from 'react';
import { render, screen } from '@testing-library/react';
import Logout from '../Logout';
import { MOCK_USER } from '../../components/__tests__/Header.spec';

describe('logout page', () => {
  it('test the logout page is rendered correctly', () => {
    render(<Logout user={MOCK_USER} />);

    expect(screen.queryByText('Logged out!')).toBeDefined();
    expect(window.localStorage.getItem('user')).toStrictEqual(
      JSON.stringify(MOCK_USER),
    );
  });
});
