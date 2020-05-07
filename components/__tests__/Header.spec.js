import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import * as utils from '../../utils';

export const MOCK_USER = {
  email: 'test@1up.health',
  user: 'test user',
  url: 'http://localhost:3000',
  oneup_access_token: '12345',
};

describe('Header Component', () => {
  it('test the correct links are shown when not logged in', () => {
    render(<Header />);

    expect(screen.queryByText('Login')).toBeDefined();
    expect(screen.queryByText('Test Data')).toBeDefined();
  });

  it('test the correct links are shown when the user is logged in', () => {
    render(<Header user={MOCK_USER} />);

    expect(screen.queryByText('Connect Data')).toBeDefined();
    expect(screen.queryByText('Logout')).toBeDefined();
    expect(screen.queryByText('test@1up.health')).toBeDefined();
    expect(screen.queryByText('Test Data')).toBeDefined();

    expect(screen.queryByText('Login')).toBeNull();
  });

  it('test the logout event is fired', () => {
    utils.logoutEvent = jest.fn();
    render(<Header user={MOCK_USER} />);

    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'logout',
        newValue: 'test_value',
      }),
    );

    expect(utils.logoutEvent).toHaveBeenCalled();
    expect(utils.logoutEvent.mock.calls[0][1]).toBe(MOCK_USER.url);
  });
});
