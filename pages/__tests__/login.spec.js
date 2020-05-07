import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';

describe('login page', () => {
  it('test the login page is rendered correctly', () => {
    window.fetch = jest.fn();

    const { container } = render(<Login />);

    expect(
      screen.queryByText(
        `You can sign in, connect your health systems, and view your medical record. Learn more about the tech behind this app in the git repo`,
      ),
    ).toBeDefined();

    expect(screen.queryByText(`Login using your email`)).toBeDefined();

    const emailInput = container.querySelector('input[type="email"]');

    expect(emailInput).toBeDefined();

    fireEvent.change(emailInput, { target: { value: 'test@1up.health' } });
    fireEvent(screen.queryAllByText('Login')[1], new MouseEvent('click'));
    expect(window.fetch).toHaveBeenCalled();

    expect(
      screen.queryByText(
        `Check your email. We sent a magic link to log into your account :)`,
      ),
    ).toBeDefined();
  });
});
