import React from 'react';
import { render, screen } from '@testing-library/react';
import Test from '../Test';
import { MOCK_USER } from '../../components/__tests__/Header.spec';

describe('test page', () => {
  it('test the test page is rendered correctly', () => {
    render(<Test user={MOCK_USER} />);

    expect(screen.queryByText('Patient')).toBeDefined();
    expect(screen.queryByText('WILMA SMART')).toBeDefined();
    expect(screen.queryByText('KEITH SCHONHOFF')).toBeDefined();

    expect(screen.queryByText('Encounter')).toBeDefined();
    expect(
      screen.queryByText(
        'Baseline University - Mission Campus, Mission Med Bldg, Outpatient Ctr',
      ),
    ).toBeDefined();
    expect(
      screen.queryByText('Baseline East Medical Center, BE Hospital, BE CT'),
    ).toBeDefined();
  });

  expect(screen.queryByText('Observation')).toBeDefined();
  expect(
    screen.queryByText(
      'Details of alcohol drinking behavior (observable entity',
    ),
  ).toBeDefined();
});
