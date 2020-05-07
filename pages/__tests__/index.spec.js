import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../Index';
import { MOCK_USER } from '../../components/__tests__/Header.spec';

describe('index page', () => {
  it('test the index page is rendered correctly', () => {
    const { container } = render(<Index user={MOCK_USER} />);

    expect(
      screen.queryByText(
        `You can sign in, connect your health systems, and view your medical record. Learn more about the tech behind this app in the git repo`,
      ),
    ).toBeDefined();

    expect(screen.queryByText(`Go to your medical dashboard`)).toBeDefined();
    expect(container.querySelector('iframe').src).toContain(
      `https://system-search.1up.health/search/?access_token=${MOCK_USER.oneup_access_token}`,
    );

    expect(window.localStorage.getItem('email')).toEqual(MOCK_USER.email);
    expect(window.localStorage.getItem('oneup_access_token')).toEqual(
      MOCK_USER.oneup_access_token,
    );
  });
});
